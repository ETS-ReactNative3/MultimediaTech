import React, { Component } from 'react';
import 'foundation-sites';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import './NavBar.css';
import * as firebase from 'firebase';
import WorkerHomepage from './WorkerHomepage';
import $ from 'jquery';

$(document).foundation();

const NavBar = ({ authUser }) =>
    <div>
        {authUser ? <NavAuth authUser={authUser} />
            : <NavNonAuth />
        }
    </div>


const NavNonAuth = () =>
    <div className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <Link to={routes.HOMEPAGE}>
            <a className="navbar-brand">Multimedia Tech</a>
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to={routes.BOOKING}>
                        <a className="nav-link">Booking</a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to={routes.WORKER_PROFILE}>
                        <a className="nav-link">Two</a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to={routes.WORKER_HOMEPAGE}>
                        <a className="nav-link">Worker Homepage</a>
                    </Link>
                </li>
            </ul>
        </div>
        <ul className="navbar-nav ml-auto" id="right">
            <li className="nav-item active">
                <Link to={routes.SIGN_IN}>
                    <a className="nav-link">Become a worker</a>
                </Link>
            </li>
            <li className="nav-item active">
                <Link to={routes.SIGN_IN}>
                    <a className="nav-link">Sign in</a>
                </Link>
            </li>
        </ul>
    </div>

var name;

const NavAuth = ({ authUser }) =>

    <div className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <Link to={routes.HOMEPAGE}>
            <a className="navbar-brand">Multimedia Tech</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to={routes.BOOKING}>
                        <a className="nav-link">Booking</a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to={routes.WORKER_PROFILE}>
                        <a className="nav-link">Two</a>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to={routes.WORKER_HOMEPAGE}>
                        <a className="nav-link">Worker Homepage</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto" id="right">
                <li className="nav-item dropdown" id="menuli">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {firebase.database().ref().child("Users").child(authUser.uid)
                            .child("Name").on("value", function (snapshot) {
                                console.log(snapshot.val());
                                name = document.createTextNode(snapshot.val());
                                document.getElementById("navbarDropdown").innerHTML = "";
                                document.getElementById("navbarDropdown").appendChild(name);
                            })
                        }
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <Link to={routes.USER_PROFILE} className="nav-link">
                            <a className="dropdown-item" id="prof">Profile</a>
                        </Link>
                        <Link to={routes.HOMEPAGE} className="nav-link">
                            <button type="button" className="dropdown-item btn btn-danger" id="bt-logout" onClick={() => { firebase.auth().signOut() }}>
                                LOG OUT
                        </button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </div >

export default NavBar;