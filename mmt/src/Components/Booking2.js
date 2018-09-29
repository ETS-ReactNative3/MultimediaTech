import React, { Component } from 'react';
import 'foundation-sites';
import $ from 'jquery';
import * as firebase from 'firebase';
import 'moment-timezone';
import Receipt from './Receipt';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
var price = 80;

const image = "https://images.unsplash.com/photo-1537914675540-ec9f82fbd752?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f577e49d7737b80e76e2715fdfb1a93&auto=format&fit=crop&w=716&q=80"

class Booking2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            takenDown: 'no',
            wallMount: 'no',
            wallType: 'doesn\'t know',
            cords: 'as is',
            externalDevices: 'no',
            price: 80,
            showReceipt: false,
        }
        this.calculator = this.calculator.bind(this);
        this.renderReceipt = this.renderReceipt.bind(this);
    }

    renderReceipt() {
        //calculator();
        if (this.state.showReceipt === false) {
            this.setState({
                showReceipt: true
            });
        } else {
            this.setState({
                showReceipt: false
            });
        }
    }

    /*calculator() {
        alert("calc");
        console.log("state size " + this.state.size);
        console.log("state takendown " + this.state.takenDown);


        if (this.state.size == "33\" - 44\"") {
            this.setState(byPropKey('price', this.state.price + 40));
            console.log("Price if 33: " + this.state.price);

        } else if (this.state.size == "45\" or larger") {
            this.setState(byPropKey('price', this.state.price + 80));
            console.log("Price: if 45" + this.state.price);

        }//End size

        if (this.state.takenDown == "yes") {
            this.setState(byPropKey('price', this.state.price + 60));
            console.log("Price if takendown yes: " + this.state.price);

        } //End taken down

        if (this.state.wallMount === "fixed") {
            this.setState(byPropKey('price', this.state.price + 30));
        } else if (this.state.wallMount === "tilting") {
            this.setState(byPropKey('price', this.state.price + 40));
        } else if (this.state.wallMount === "full motion") {
            this.setState(byPropKey('price', this.state.price + 50));
        }//End wall mount

        if (this.state.wallType === "Brick or concrete") {
            this.setState(byPropKey('price', this.state.price + 35));
        } //End wall type

        if (this.state.cords === "bundle \& cover") {
            this.setState(byPropKey('price', this.state.price + 30));
        }//End cords

        if (this.state.externalDevices === "one or more devices") {
            this.setState(byPropKey('price', this.state.price + 15));
        }//End external devices
        console.log("Price: " + this.state.price);
        //this.renderReceipt();
    }*/

    calculator() {
        if (this.state.size === "33\" - 44\"") {
            price += 40;
        } else if (this.state.size === "45\" or larger") {
            price += 80;
        }//End size

        if (this.state.takenDown === "yes") {
            price += 60;
        } //End taken down

        if (this.state.wallMount === "fixed") {
            price += 30;
        } else if (this.state.wallMount === "tilting") {
            price += 40;
        } else if (this.state.wallMount === "full motion") {
            price += 50;
        }//End wall mount

        if (this.state.wallType === "Brick or concrete") {
            price += 35;
        } //End wall type

        if (this.state.cords === "bundle \& cover") {
            price += 30;
        }//End cords

        if (this.state.externalDevices === "one or more devices") {
            price += 15;
        }
        this.setState({
            price: price
        });

        console.log("Price var: " + price);

        console.log("Price: " + this.state.price);


    }



    render() {
        return (
            <div>
                {/*<Receipt size={this.state.size} takenDown={this.state.takenDown} wallMount={this.state.wallMount} wallType={this.state.wallType} cords={this.state.cords} externalDevices={this.state.externalDevices}/>*/}
                <div className="card float-center" style={{ width: 600 }}>
                    <div className="card-divider">
                        Your TV Mounting
                </div>
                    <img src={image} />
                    <div className="card-section">
                        <h4>TV Mounting</h4>
                        <label>How large is your TV?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('size', "Up to 32\""))}>Up to 32"</a>
                                <a className="button 33" onClick={booking => this.setState(byPropKey('size', "33\" - 44\""))}>33" - 44"</a>
                                <a className="button 45" onClick={booking => this.setState(byPropKey('size', "45\" or larger"))}>45" or larger</a>
                            </div>
                        </label>
                        <label>Does your TV needs to be taken down?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('takenDown', "no"))}>No</a>
                                <a className="button taken yes" onClick={booking => this.setState(byPropKey('takenDown', "yes"))}>Yes</a>
                            </div>
                        </label>
                        <label>Do you need a wall mount for your TV?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('wallMount', "no"))}>I already have one</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('wallMount', "fixed"))}>Fixed</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('wallMount', "tilting"))}>Tilting</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('wallMount', "full motion"))}>Full Motion</a>
                            </div>
                        </label>
                        <label>What type of wall will your TV be mounted on?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('wallType', "Drywall, Plaster or Wood"))}>Drywall, Plaster, or Wood</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('wallType', "Brick or concrete"))}>Brick or Concrete</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('wallType', "Doesn't know"))}>I don't know</a>
                            </div>
                        </label>
                        <label>How should we handle the cords?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('cords', "as is"))}>Leave as is</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('cords', "bundle \& cover"))}>Bundle & Conver</a>
                            </div>
                        </label>
                        <label>Do you have external devices to connect?
                            <br></br>
                            <div className="button-group">
                                <a className="button" onClick={booking => this.setState(byPropKey('externalDevices', "no"))}>No devices</a>
                                <a className="button" onClick={booking => this.setState(byPropKey('externalDevices', "one or more devices"))}>One or more devices</a>
                            </div>
                        </label>
                        <button className="hollow button" href="#" onClick={this.calculator}>Calculator</button>
                        <button className="hollow button" href="#" onClick={this.renderReceipt}>Show price</button>

                    </div>
                </div>
                {this.state.showReceipt ? <Receipt price={this.state.price} /> : null}
            </div>
        );
    }
}

export default Booking2;