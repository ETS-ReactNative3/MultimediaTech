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
            <div className="grid-container full">
                <div className="grid-x grid-padding-x">
                    <div className="cell medium-6 large-4" id="dataSide">
                        {/*<div className="callout large" id='callout'>*/}
                        <h4 id="signIn">Welcome Back!</h4>
                        <br />
                        <label className="labels">Email
                                <input className="inputs"
                                type="text"
                                id="email"
                                placeholder="email"
                                value={uEmail}
                                onChange={event => this.setState(byPropKey('uEmail', event.target.value))}
                            />
                        </label>
                        <br />
                        <label className="labels">Password
                                <input className="inputs"
                                type="password"
                                id="password"
                                placeholder="password"
                                value={uPassword}
                                onChange={event => this.setState(byPropKey('uPassword', event.target.value))}
                            />
                        </label>
                        <br />
                        <button id='signInButton' className="hollow button" onClick={this.submit}>Sign In</button>
                        <br />
                        <Link to={routes.SIGN_UP}>
                            <button id='signUpButton' className="button">Sign Up</button>
                        </Link>
                        {error && <p>{error.message}</p>}
                        {/*</div >*/}
                    </div>
                    <div className="cell medium-6 large-8" id="about">

                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1112.194 915">
                            <defs>
                                <style dangerouslySetInnerHTML={{ __html: "\n      .cls-1 {\n        fill: url(#linear-gradient);\n      }\n    " }} />
                                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                                    <stop offset={0} stopColor="#08437a" />
                                    <stop offset={1} stopColor="#ab1179" />
                                </linearGradient>
                            </defs>
                            <path id="topLeftBlob" data-name="Path 5" className="cls-1" d="M457.5,0c252.67,0,654.694,216.218,654.694,468.888,0,112.943-413.211,62.654-480.919,142.313C547.233,710.076,677.232,889.073,457.5,915,204.83,915,0,710.17,0,457.5S204.83,0,457.5,0Z" />
                        </svg>


                        <h4 id="aboutTitle">About us</h4>
                        <text id="aboutText">Lorem ipsum dolor sit amet, mea saepe accusamus no, sea eu sonet oportere inciderint.
                            Eos alia laudem aperiam an.
                            Te mel erat mediocrem iracundia, an vis iusto civibus. Vel et justo partem,
                            et quodsi offendit usu.
                        </text>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignIn,
};
