import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'foundation-sites';
import './SignIn.css'
import { withRouter } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import { Link } from 'react-router-dom';



const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    uEmail: '',
    uPassword: '',
    error: null,
};

const SignInPage = ({ history }) =>
    <div id="sign-up-div" >
        <h1 id="main-title">Welcome Back</h1>
        <SignIn history={history} />

    </div>

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    submit = (event) => {
        const {
            uEmail,
            uPassword,
        } = this.state;

        const {
            history,
        } = this.props;

        firebase.auth().signInWithEmailAndPassword(uEmail, uPassword)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOMEPAGE);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }


    render() {

        const {
            uEmail,
            uPassword,
            error,
        } = this.state;

        return (
            <div className="callout large" id='callout'>
                <div className="card align-center" id="card" style={{ width: 500 }}>
                    <h4 id="signIn">Sign In</h4>
                    <div className="card-section">
                        <label className="labels">Email
                            <input className="inputs"
                                type="text"
                                id="email"
                                placeholder="email"
                                value={uEmail}
                                onChange={event => this.setState(byPropKey('uEmail', event.target.value))}
                            />
                        </label>
                        <label className="labels">Password
                            <input className="inputs"
                                type="password"
                                id="password"
                                placeholder="password"
                                value={uPassword}
                                onChange={event => this.setState(byPropKey('uPassword', event.target.value))}
                            />
                        </label>
                        <button id='signInButton' className="hollow button" onClick={this.submit}>Sign In</button>
                        <Link to={routes.SIGN_UP}>
                            <button id='signUpButton' className="button">Sign Up</button>
                        </Link>
                        {error && <p>{error.message}</p>}
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(SignInPage);

export {
    SignIn,
};
