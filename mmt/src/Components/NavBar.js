import React, { Component } from 'react';
import 'foundation-sites';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import './NavBar.css';

const NavBar = () =>
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
                    <Link to={routes.BOOKING}>
                        <a href="#0">Three</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right" >
            <ul className="menu" id="right">
                <li>
                    <Link to={routes.CREATE_WORKER}>
                        <a href="#0" >Become a worker</a>
                    </Link>
                </li>
                <li><button type="button" className="button">Search</button></li>
            </ul>
        </div>
    </div>

export default NavBar;
