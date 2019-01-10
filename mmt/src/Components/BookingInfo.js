import React, { Component } from 'react';
import 'foundation-sites';
import $ from 'jquery';
import * as firebase from 'firebase';
import 'moment-timezone';
import './BookingInfo.css';

import MapContainer from "./GoogleMapsContainer";


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
var price = 80;

const image = "https://images.unsplash.com/photo-1537914675540-ec9f82fbd752?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f577e49d7737b80e76e2715fdfb1a93&auto=format&fit=crop&w=716&q=80"



class BookingInfo extends Component {
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
            fName: "",
            lName: "",
            uEmail: "",
            uZip: "",
            numberTV: "0",
            date: "",
        }
        this.calculator = this.calculator.bind(this);
        this.renderReceipt = this.renderReceipt.bind(this);
        this.reDraw = this.reDraw.bind(this);
        this.addBooking = this.addBooking.bind(this);
    }

    addBooking() {
        var bookingRef = firebase.database().ref().child("Reservations");
        var key = bookingRef.push().getKey();
        bookingRef.child(key).set({
            "First Name": this.state.fName,
            "Last Name": this.state.lName,
            "Email": this.state.uEmail,
            "Address": this.state.uZip,
            "Number of TVs": this.state.numberTV,
            "Size": this.state.size,
            "Taken Down": this.state.takenDown,
            "Wall Mount": this.state.wallMount,
            "Wall type": this.state.wallType,
            "Cords": this.state.cords,
            "External Devices": this.state.externalDevices,
            "Price": this.state.price,
            "Date": this.state.date,
        })
        alert("add");
    }

    async componentDidMount() {
        //BookingInfoState();
        await this.setState({
            fName: this.props.firstName,
            lName: this.props.lastName,
            uEmail: this.props.email,
            uZip: this.props.zip,
            numberTV: this.props.numberTV,
            date: this.props.date,
        })
        console.log("Component did mount");
        console.log("Name: " + this.state.fName + " " + this.state.lName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip);
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

  

    reDraw() {
        document.getElementById("receiptDiv").innerHTML = "";
        var rDiv = document.getElementById("receiptDiv");
        //rDiv.innerHTML("");
        var receipt = document.createElement('div');
        receipt.className = "card float-center";
        receipt.style = "width: 300";
        var header = document.createElement('div');
        header.className = "card-divider";
        var h = document.createElement('h4');
        h.appendChild(document.createTextNode("SUMMARY"));
        header.appendChild(h);
        var cardSection = document.createElement('div');

        var yourP = document.createElement('p');
        yourP.appendChild(document.createTextNode("Current price: $" + price));

        var size = document.createElement('p');
        size.appendChild(document.createTextNode("Size: " + this.state.size));

        var wall = document.createElement('p');
        wall.appendChild(document.createTextNode("Wall Mount: " + this.state.wallMount));
        
        var cords = document.createElement('p');
        cords.appendChild(document.createTextNode("Cords: " + this.state.cords));

        var takenDown = document.createElement('p');
        takenDown.appendChild(document.createTextNode("Take down: " + this.state.takenDown));
        
        var wallType = document.createElement('p');
        wallType.appendChild(document.createTextNode("Wall Type: " + this.state.wallType));


        cardSection.appendChild(yourP);
        cardSection.appendChild(size);
        cardSection.appendChild(wall);
        cardSection.appendChild(cords);
        cardSection.appendChild(takenDown);
        cardSection.appendChild(wallType);


        var button = document.createElement('button');
        button.className = "hollow button";
        //button.setAttribute("onClick", );
        button.appendChild(document.createTextNode("Continue"));
        button.createTextNode = "contine";

        receipt.appendChild(header);
        receipt.appendChild(cardSection);
        receipt.appendChild(button);
        rDiv.appendChild(receipt);
        price = 80;
    }

    async calculator() {
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
        await this.setState({
            price: price
        });

        console.log("Price var: " + price);

        console.log("Price: " + this.state.price);

        this.reDraw();
    }




    render() {
        const style = {
            /*width: '50vw',
            height: '75vh',*/
            width: '10vw',
            height: '25vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }

        return (

            <div>
                <h4 id="title">TV Mounting</h4>
                <div className="grid-container" id='grid'>
                    {/*<Receipt size={this.state.size} takenDown={this.state.takenDown} wallMount={this.state.wallMount} wallType={this.state.wallType} cords={this.state.cords} externalDevices={this.state.externalDevices}/>*/}
                    <div className="grid-x grid-padding-x">
                        <div id="cell" className="cell small-6">
                            <label id="subs">How large is your TV?
                            <br></br>
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <a type="button" id="buttons32" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="0" onClick={async booking => {
                                            {/*$('#buttons32').click(function (e) {
                                                $('#buttons32').css("background", "#373DEE")
                                                $('#buttons33').removeClass('active')
                                                $('#buttons33').css("background", "white");
                                                $('#buttons45').removeClass('active')
                                                $('#buttons45').css("background", "white");
                                            });*/}
                                            await this.setState(byPropKey('size', "Up to 32\""));
                                            console.log(this.state.size);
                                            this.calculator()
                                        }}>Up to 32"</a>
                                    <a type="button" id="buttons33" className="btn btn-primary 33" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="40" onClick={async booking => {
                                            {/*$('#buttons33').click(function (e) {
                                                $('#buttons33').css("background", "#373DEE")
                                                $('#buttons32').removeClass('active')
                                                $('#buttons32').css("background", "white");
                                                $('#buttons45').removeClass('active')
                                                $('#buttons45').css("background", "white");
                                            });*/}
                                            await this.setState(byPropKey('size', "33\" - 44\""));
                                            console.log(this.state.size);
                                            this.calculator()
                                        }}>33" - 44"</a>
                                    <a type="button" id="buttons45" className="btn btn-primary 45" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="80" onClick={async booking => {
                                            {/*$('#buttons45').click(function (e) {
                                                $('#buttons45').css("background", "#373DEE")
                                                $('#buttons32').removeClass('active')
                                                $('#buttons32').css("background", "#white")
                                                $('#buttons33').removeClass('active')
                                                $('#buttons33').css("background", "#white")
                                            });*/}
                                            await this.setState(byPropKey('size', "45\" or larger"));
                                            console.log(this.state.size);
                                            this.calculator()
                                        }}>45" or larger</a>
                                </div>
                            </label>
                        </div>
                        <div className="cell small-6">
                            <label id="subs">Does your TV needs to be taken down?
                            <br></br>
                                <div className="button-group">
                                    <a type="button" id="buttonsTNo" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="0" onClick={async booking => {
                                            await this.setState(byPropKey('takenDown', "no"));
                                            {/*$('#buttonsTNo').click(function (e) {
                                                $('#buttonsTYes').removeClass('active')
                                            });*/}
                                            this.calculator()
                                        }}>No</a>
                                    <a type="button" id="buttonsTYes" className="btn btn-primary taken yes" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="60" onClick={async booking => {
                                            await this.setState(byPropKey('takenDown', "yes"));
                                            {/*$('#buttonsTYes').click(function (e) {
                                                $('#buttonsTNo').removeClass('active')
                                            });*/}
                                            this.calculator()
                                        }}>Yes</a>
                                </div>
                            </label>
                        </div>
                        <div className="cell small-6">
                            <label id="subs">Do you need a wall mount for your TV?
                            <br></br>
                                <div className="button-group">
                                    <a type="button" id="buttonsOwn" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="0" onClick={async booking => {
                                            await this.setState(byPropKey('wallMount', "no"));
                                            this.calculator()
                                            {/*$('#buttonsOwn').click(function (e) {
                                                $('#buttonsFixed').removeClass('active')
                                                $('#buttonsTilting').removeClass('active')
                                                $('#buttonsFull').removeClass('active')
                                            });*/}
                                        }}>Already own one</a>
                                    <a type="button" id="buttonsFixed" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="30" onClick={async booking => {
                                            await this.setState(byPropKey('wallMount', "fixed"));
                                            this.calculator()
                                            {/*$('#buttonsFixed').click(function (e) {
                                                $('#buttonsOwn').removeClass('active')
                                                $('#buttonsTilting').removeClass('active')
                                                $('#buttonsFull').removeClass('active')
                                            });*/}
                                        }}>Fixed</a>
                                    <a type="button" id="buttonsTilting" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="40" onClick={async booking => {
                                            await this.setState(byPropKey('wallMount', "tilting"));
                                            this.calculator()
                                            {/*$('#buttonsTilting').click(function (e) {
                                                $('#buttonsFixed').removeClass('active')
                                                $('#buttonsOwn').removeClass('active')
                                                $('#buttonsFull').removeClass('active')
                                            });*/}
                                        }}>Tilting</a>
                                    <a type="button" id="buttonsFull" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="50" onClick={async booking => {
                                            await this.setState(byPropKey('wallMount', "full motion"));
                                            this.calculator()
                                            {/*$('#buttonsFull').click(function (e) {
                                                $('#buttonsFixed').removeClass('active')
                                                $('#buttonsTilting').removeClass('active')
                                                $('#buttonsOwn').removeClass('active')
                                            });*/}
                                        }}>Full Motion</a>
                                </div>
                            </label>
                        </div>
                        <div className="cell small-6">
                            <label id="subs">What type of wall will your TV be mounted on?
                            <br></br>
                                <div className="button-group">
                                    <a type="button" id="buttonsDrywall" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="0" onClick={async booking => {
                                            await this.setState(byPropKey('wallType', "Drywall, Plaster or Wood"));
                                            this.calculator()
                                            {/*$('#buttonsDrywall').click(function (e) {
                                                $('#buttonsBrick').removeClass('active')
                                                $('#buttonsDont').removeClass('active')
                                            });*/}
                                        }}>Drywall, Plaster, or Wood</a>
                                    <a type="button" id="buttonsBrick" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="35" onClick={async booking => {
                                            await this.setState(byPropKey('wallType', "Brick or concrete"));
                                            this.calculator()
                                            {/*$('#buttonsBrick').click(function (e) {
                                                $('#buttonsDrywall').removeClass('active')
                                                $('#buttonsDont').removeClass('active')
                                            });*/}
                                        }}>Brick or Concrete</a>
                                    <a type="button" id="buttonsDont" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                        price="0" onClick={async booking => {
                                            await this.setState(byPropKey('wallType', "Doesn't know"));
                                            this.calculator()
                                            {/*$('#buttonsDont').click(function (e) {
                                                $('#buttonsBrick').removeClass('active')
                                                $('#buttonsDrywall').removeClass('active')
                                            });*/}
                                        }}>I don't know</a>
                                </div>
                            </label>
                        </div>
                        <label id="subs">How should we handle the cords?
                            <br></br>
                            <div className="button-group">
                                <a type="button" id="buttonsAsIs" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                    price="0" onClick={async booking => {
                                        await this.setState(byPropKey('cords', "as is"));
                                        this.calculator()
                                        {/*$('#buttonsAsIs').click(function (e) {
                                            $('#buttonsBundle').removeClass('active')
                                        });*/}
                                    }}>Leave as is</a>
                                <a type="button" id="buttonsBundle" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                    price="30" onClick={async booking => {
                                        await this.setState(byPropKey('cords', "bundle \& cover"));
                                        this.calculator()
                                        {/*$('#buttonsBundle').click(function (e) {
                                            $('#buttonsAsIs').removeClass('active')
                                        });*/}
                                    }}>Bundle & Conver</a>
                            </div>
                        </label>
                        <label id="subs">Do you have external devices to connect?
                            <br></br>
                            <div className="button-group">
                                <a type="button" id="buttonsExtNo" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                    price="0" onClick={async booking => {
                                        await this.setState(byPropKey('externalDevices', "no"));
                                        this.calculator()
                                        {/*$('#buttonsExtNo').click(function (e) {
                                            $('#buttonsExtYes').removeClass('active')
                                        });*/}
                                    }}>No devices</a>
                                <a type="button" id="buttonsExtYes" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                                    price="15" onClick={async booking => {
                                        await this.setState(byPropKey('externalDevices', "one or more devices"));
                                        this.calculator()
                                        {/*$('#buttonsExtYes').click(function (e) {
                                            $('#buttonsExtNo').removeClass('active')
                                        });*/}
                                    }}>One or more devices</a>
                            </div>
                        </label>
                        <div className="card" style={style}>
                            <MapContainer center={{
                                lat: 28.417955,
                                lng: -81.581255
                            }} />
                        </div>
                        <br />
                        <div className="buttons">
                            {/*<button className="btn btn-primary" href="#" onClick={this.calculator}>Calculator</button>*/}
                            <button className="btn btn-primary" href="#" onClick={this.addBooking}>Book</button>
                        </div>
                        <div className="cell medium-6 large-4" id="receiptDiv">
                            {/*<Receipt price={this.state.price}/>*/}
                        </div>
                    </div>
                    {/*{this.state.showReceipt ? <Receipt price={this.state.price} /> : null}*/}
                    {console.log("Name: " + this.state.fName + " " + this.state.lName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip)}
                </div >
            </div>
        );
    }
}

export default BookingInfo;