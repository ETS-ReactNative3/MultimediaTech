import React, { Component } from 'react';
import 'foundation-sites';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import App from './../App';

const NavBar = () =>
    <div>
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
            <button className="menu-icon" type="button" data-toggle="responsive-menu">
                <div className="title-bar-title">Menu</div>
            </button></div>
        <div className="top-bar" id="responsive-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">MultimediaTech</li>
                    <li className="has-submenu">
                        <a href="#0">Booking</a>
                        <ul className="submenu menu vertical" data-submenu>
                            <li>
                                <Link to={routes.BOOKING}>
                                    <a href="#0">TV Mount</a>
                                </Link>
                            </li>
                            <li><a href="#0">Two</a></li>
                            <li><a href="#0">Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#0">Two</a></li>
                    <li><a href="#0">Three</a></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link to={routes.CREATE_WORKER}>
                            Become a worker
                    {/*<a href="#0" >Become a worker</a>*/}
                        </Link>
                    </li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>

export default NavBar;
