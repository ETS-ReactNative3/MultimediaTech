import React, { Component } from 'react';
import 'foundation-sites';
import $ from 'jquery';
import * as firebase from 'firebase';
import Moment from 'react-moment';
import 'moment-timezone';
import BookingInfo from './BookingInfo.js';
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
            numberTV: 0,
            date: '',
            showBookingInfo: false,
        }
        this.addBooking = this.addBooking.bind(this);
        //this.changeTVs = this.changeTVs.bind(this);
        this.renderBookingInfo = this.renderBookingInfo.bind(this);
        //this.functions = this.functions.bind(this);

    }

    componentDidMount() {
        $(document).foundation();
    }

    renderBookingInfo() {
        alert("render");
        if (this.state.showBookingInfo === false) {
            this.setState({
                showBookingInfo: true
            });
        } else {
            this.setState({
                showBookingInfo: false
            });
        }
    }

    addBooking() {
        var bookingRef = firebase.database().ref().child("Reservations");
        var key = bookingRef.push().getKey();

        bookingRef.child(key).set({
            "First Name": this.state.uFName,
            "Last Name": this.state.uLName,
            "Email": this.state.uEmail,
            "Address": this.state.uZip,
            "Number of TVs": this.state.numberTV,
        })
        alert("add");
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
                <div className="card float-center" style={{ width: 600 }}>
                    <div className="card-divider">
                        TV Mount
                    </div>
                    <div className="card-section">
                        <h4>Book a TV mount.</h4>
                        <Moment>{now}</Moment>
                        <form>
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                    <div className="medium-6 cell">
                                        <label>First Name
                                        <input id="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                value={uFName}
                                                onChange={event => this.setState(byPropKey('uFName', event.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Last Name
                                    <input id="lastName"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={uLName}
                                                onChange={booking => this.setState(byPropKey('uLName', booking.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Email
                                        <input id="email"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={uEmail}
                                                onChange={booking => this.setState(byPropKey('uEmail', booking.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Zip Code
                                        <input id="zip"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={uZip}
                                                onChange={booking => this.setState(byPropKey('uZip', booking.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Installation date
                                            <input id="zip"
                                                type="date"
                                                value={date}
                                                onChange={booking => this.setState(byPropKey('date', booking.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Number of TVs
                                        <br></br>
                                            <div className="button-group">
                                                <a className="button" onClick={booking => this.setState(byPropKey('numberTV', 1))}>One</a>
                                                <a className="button" onClick={booking => this.setState(byPropKey('numberTV', 2))}>Two</a>
                                                <a className="button" onClick={booking => this.setState(byPropKey('numberTV', 3))}>Three</a>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className="hollow button" href="#" onClick={this.renderBookingInfo}>Submit</button>
                    </div>
                </div>
                        {this.state.showBookingInfo ? <BookingInfo /> : null}
            </div>
        );
    }
}

export default Booking;