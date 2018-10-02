import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SignUp.css';

import * as routes from '../Constants/Routes';
import * as firebase from 'firebase';
import 'firebase/auth';


const SignUpPage = ({ history }) =>
    <div id="sign-up-div">
        <div id="main-title">Welcome</div>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    fullname: '',
    email: '',
    telephone: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});



class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { INITIAL_STATE };

        /*this.addUser = this.addUser.bind(this);*/
    }
    /*
        addUser() {
            var ref = firebase.database().ref().child("Usuarios");
    
            var key = ref.push().getKey();
    
            ref.child(key).set({
                "Username": this.state.username,
                "Nombre": this.state.fullname,
                "Email": this.state.email,
                "Telefono": this.state.telephone,
                "Password": this.state.passwordOne,
                "Llave": key
            });
        }*/

    onClick = (event) => {
        const {
            username,
            fullname,
            telephone,
            email,
            passwordOne,
        } = this.state;
        const {
            history,
        } = this.props;
        firebase.auth().createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOMEPAGE);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var userId = firebase.auth().currentUser.uid;
                var ref = firebase.database().ref().child("Users");

                var key = ref.push().getKey();
                ref.child(userId).set({
                    "Username": username,
                    "Nombre": fullname,
                    "Email": email,
                    "Telephone": telephone,
                    "Password": passwordOne,
                    "Key": userId,
                    "Amigos": {
                    }

                });
            }
        });

        event.preventDefault();
    }


    render() {
        const {
            username,
            fullname,
            email,
            telephone,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <div className="callout large" id='callout' onSubmit={this.onSubmit}>
                <div className="card align-center" id="card" style={{ width: 500 }}>
                    <h4 id="signIn">Sign Up</h4>
                    <div className="card-section">

                        <label className="labels">Username</label>
                            <input className="inputs" id="sign-up-input"
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Username"
                            />
                        <label className="labels">Full Name</label>
                            <input className="inputs" id="sign-up-input"
                                value={fullname}
                                onChange={event => this.setState(byPropKey('fullname', event.target.value))}
                                type="text"
                                placeholder="Full Name"
                            />
                        
                        <label className="labels">Email</label>
                            <input className="inputs" id="sign-up-input"
                                value={email}
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                type="text"
                                placeholder="Email Address"
                            />

                        <label className="labels">Phone number</label>
                            <input className="inputs" id="sign-up-input"
                                value={telephone}
                                onChange={event => this.setState(byPropKey('telephone', event.target.value))}
                                type="email"
                                placeholder="Telephone (optional)"
                            />
                        <label className="labels">Password</label>
                            <input className="inputs" id="sign-up-input"
                                value={passwordOne}
                                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                type="password"
                                placeholder="Password"
                            />
                        <label className="labels">Confirm Password</label>
                            <input className="inputs" id="sign-up-input"
                                value={passwordTwo}
                                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        <button className="hollow button" id="signInButton" disabled={isInvalid} onClick={this.onClick}>
                            Sign Up
                    </button>
                    </div>
                </div>
                {error && <p>{error.message}</p>}
            </div>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};