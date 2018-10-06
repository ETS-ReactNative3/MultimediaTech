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
            numberTV: 1,
            date: '',
            showBookingInfo: false,
        }
        //this.addBooking = this.addBooking.bind(this);
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
                                            <input id="date"
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
                        {console.log("Name: " + this.state.uFName + " " + this.state.uLName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip)}
                        {this.state.showBookingInfo ? <BookingInfo firstName={this.state.uFName} 
                        lastName={this.state.uLName} 
                        email={this.state.uEmail} 
                        zip={this.state.uZip} 
                        numberTV={this.state.numberTV}
                        date={this.state.date}
                        /> : null}
            </div>
        );
    }
}

export default Booking;