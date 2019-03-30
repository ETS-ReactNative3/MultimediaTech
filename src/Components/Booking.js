import React, { Component } from 'react';
import 'foundation-sites';
import $ from 'jquery';
import * as firebase from 'firebase';
import Moment from 'react-moment';
import 'moment-timezone';
import BookingInfo from './BookingInfo.js';
import './Booking.css';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
//import Receipt from './Receipt.js';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

var moment = require('moment');
var now = moment();

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uFName: '',
            uLName: '',
            uEmail: '',
            uZip: '',
            numberTV: 1,
            date: '',
            showBookingInfo: false,
        }
        //this.addBooking = this.addBooking.bind(this);
        //this.changeTVs = this.changeTVs.bind(this);
        this.renderBookingInfo = this.renderBookingInfo.bind(this);
        //this.functions = this.functions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {

    }

    renderBookingInfo() {
        if (this.state.uFName === '' || this.state.uLName === '' || this.state.uEmail === '' ||
            this.state.uZip === '' || this.state.date === '') {
            alert("Please verify you entered every field");
        } else {
            this.setState({
                showBookingInfo: true,
            })
        }
        /*if (this.state.showBookingInfo === false) {
            this.setState({
                showBookingInfo: true
            });
        } else {
            this.setState({
                showBookingInfo: false
            });
        }*/
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            uFName: event.target.firstName.value,
            uLName: event.target.lastName.value,
            uEmail: event.target.email.value,
            uZip: event.target.zip.value,
            date: event.target.date.value,

        })
        this.renderBookingInfo();
    }


    /*functions() {
        this.addBooking();
        this.renderBookingInfo();
    }*/



    /*onClick = (event) => {
        const {
            uFName,
            uLName,
            uEmail,
            uAddress,
        } = this.state;
        { this.addBooking() }

        //{ history.push(routes.HOME) }
        event.preventDefault();
    }*/

    render() {

        const {
            uFName,
            uLName,
            uEmail,
            uZip,
            date,
            //numberTV,
        } = this.state;
        return (
            <div className="Booking">
                <h1 id="quickInfo"> QUICK INFO</h1>
                <Moment>{now}</Moment>
                <div >
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="medium-6 cell">
                                <input name="firstName"
                                    id="firstName"
                                    className="inputs"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.uFName}
                                    onChange={event => this.setState(byPropKey('uFName', event.target.value))}
                                />
                            </div>
                            <div className="medium-6 cell">
                                <input name="lastName"
                                    id="lastName"
                                    className="inputs"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.uLName}
                                    onChange={booking => this.setState(byPropKey('uLName', booking.target.value))}
                                />
                            </div>
                            <div className="medium-6 cell">
                                <input name="email"
                                    id="email"
                                    className="inputs"
                                    type="text"
                                    placeholder="Email"
                                    value={this.state.uEmail}
                                    onChange={booking => this.setState(byPropKey('uEmail', booking.target.value))}
                                />
                            </div>
                            <div className="medium-6 cell">
                                <input name="zip"
                                    id="zip"
                                    className="inputs"
                                    type="text"
                                    placeholder="Zip"
                                    value={this.state.uZip}
                                    onChange={booking => this.setState(byPropKey('uZip', booking.target.value))}
                                />
                            </div>
                            <div className="medium-6 cell">
                                <input name="date"
                                    id="date"
                                    className="inputs"
                                    type="date"
                                    value={date}
                                    onChange={booking => this.setState(byPropKey('date', booking.target.value))}
                                />
                            </div>
                            <div className="medium-6 cell">
                                <br></br>
                                <div className="button-group">
                                    <a id="buttons" className="button" onClick={booking => this.setState(byPropKey('numberTV', 1))}>1</a>
                                    <a id="buttons" className="button" onClick={booking => this.setState(byPropKey('numberTV', 2))}>2</a>
                                    <a id="buttons" className="button" onClick={booking => this.setState(byPropKey('numberTV', 3))}>3</a>
                                </div>
                            </div>
                            <div className="medium-6 cell">
                                {//<Link to={routes.BOOKING_INFO}>
                                }<button id="next" className="hollow button" href="#" onClick={/*() => {
                                        if (document.getElementById("inputs").value() === '' || document.getElementById('inputs').value() === 'dd/mm/aaaa') {
                                            alert("You need to input your information");
                                        } else {
                                            this.renderBookingInfo
                                        }*/

                                    //this.handleSubmit
                                    this.renderBookingInfo


                                }>Submit</button>
                                {//</Link>
                                }</div>
                        </div>
                    </div>
                </div>

                {console.log("Name: " + this.state.uFName + " " + this.state.uLName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip)}
                {
                    this.state.showBookingInfo ? <BookingInfo firstName={this.state.uFName}
                        lastName={this.state.uLName}
                        email={this.state.uEmail}
                        zip={this.state.uZip}
                        numberTV={this.state.numberTV}
                        date={this.state.date}
                    /> : null
                }
            </div >
        );
    }
}

export default Booking;