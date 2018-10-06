import React, { Component } from 'react';
import 'foundation-sites';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import './NavBar.css';
import * as firebase from 'firebase';
import WorkerHomepage from './WorkerHomepage';

const NavBar = ({ authUser }) =>
    <div>
        {authUser ? <NavAuth authUser={authUser} />
            : <NavNonAuth />
        }
    </div>


const NavNonAuth = () =>
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="dropdown menu" id="menu" data-dropdown-menu>
                <li>
                    <Link to={routes.HOMEPAGE}>
                        <li className="menu-text">Multimedia Tech</li>
                    </Link>
                </li>
                <li>
                    <Link to={routes.BOOKING}>
                        <a href="#0">Booking</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.WORKER_PROFILE}>
                        <a href="#0">Two</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.WORKER_HOMEPAGE}>
                        <a href="#0">Worker Homepage</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right" >
            <ul className="menu" id="right">
                <li>
                    <Link to={routes.SIGN_IN}>
                        <a href="#0" >Become a worker</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.SIGN_IN}>
                        <a>Sign in</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>


const NavAuth = ({ authUser }) =>
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="dropdown menu" id="menu" data-dropdown-menu>
                <li>
                    <Link to={routes.HOMEPAGE}>
                        <li className="menu-text">Multimedia Tech</li>
                    </Link>
                </li>
                <li>
                    <Link to={routes.BOOKING}>
                        <a href="#0">Booking</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.WORKER_PROFILE}>
                        <a href="#0">Two</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.WORKER_HOMEPAGE}>
                        <a href="#0">Worker Homepage</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right" >
            <ul className="menu" id="right">
                <li>
                    {/*<Link to={routes.USER_PROFILE}>
                        {firebase.database().ref().child("Users").child(authUser.uid)
                            .child("Name").on("value", function (snapshot) {
                                console.log(snapshot.val());
                                var name = document.createTextNode(snapshot.val());
                                document.getElementById("right").innerHTML = "";
                                document.getElementById("right").appendChild(name);
                            })
                        }
                    </Link>*/}
                    <Link to={routes.USER_PROFILE}>
                        <a>Profile</a>
                    </Link>
                </li>
                <li>
                    <Link to={routes.SIGN_IN}>
                        <a>Sign in</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>

export default NavBar;
