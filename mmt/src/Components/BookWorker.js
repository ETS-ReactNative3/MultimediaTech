import React, { Component } from 'react';
import 'foundation-sites';
import $ from 'jquery';
import * as firebase from 'firebase';
import 'moment-timezone';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
var price = 80;

const image = "https://images.unsplash.com/photo-1537914675540-ec9f82fbd752?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f577e49d7737b80e76e2715fdfb1a93&auto=format&fit=crop&w=716&q=80"



class BookWorker extends Component {
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
        //Get selected worker
        var bookingRef = firebase.database().ref().child("Workers");
        //var key = bookingRef.push().getKey();
        var iteration = 0;
        bookingRef.once("value", (snapshot) => {
            var snap = Object.keys(snapshot.val())[iteration];
            iteration++;
            console.log("snap: " + snap);
            var key = bookingRef.child(snap).child("Jobs").push().getKey();
            console.log("key: " + key);
            bookingRef.child(snap).child("Jobs").child(key).set({
                "Size": this.state.size,
                "Taken Down": this.state.takenDown,
                "Wall Mount": this.state.wallMount,
                "Wall type": this.state.wallType,
                "Cords": this.state.cords,
                "External Devices": this.state.externalDevices,
                "Price": this.state.price,
                "Date": this.state.date,
                "First Name": this.state.fName,
                "Last Name": this.state.lName,
                "Email": this.state.uEmail,
                "Address": this.state.uZip,
                "Number of TVs": this.state.numberTV,
            });
            /*snapshot.forEach( (childSnapshot) => {
                //var key = childSnapshot.push().getKey();
                //childSnapshot.child("Jobs").child(key).val();
                //childSnapshot.childSnapshotd.child("Jobs").ref().set({
                    //bookingRef.child(snapshot.child(childSnapshot.child()))
                    bookingRef.child(snap).child(key).set({
                    
                });*/
            
        });
        /*bookingRef.child(key).set({
        })*/
        alert("add");
    }

    componentDidMount() {
        //BookWorkerState();
        /*this.setState({
            fName: this.props.firstName,
            lName: this.props.lastName,
            uEmail: this.props.email,
            uZip: this.props.zip,
            numberTV: this.props.numberTV,
            date: this.props.date,
        })*/
        //console.log("Name: " + this.state.fName + " " + this.state.lName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip);
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
        h.appendChild(document.createTextNode("Dynamic Price"));
        header.appendChild(h);
        var cardSection = document.createElement('div');
        var yourP = document.createElement('p');
        yourP.appendChild(document.createTextNode("Current price: " + price));
        cardSection.appendChild(yourP);
        var button = document.createElement('button');
        button.className = "hollow button";
        //button.setAttribute("onClick", );
        button.appendChild(document.createTextNode("Continue"));
        button.createTextNode = "continue";

        receipt.appendChild(header);
        receipt.appendChild(cardSection);
        receipt.appendChild(button);
        rDiv.appendChild(receipt);
        price = 80;
    }

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

        this.reDraw();
    }



    render() {
        return (
            <div className="grid-x grid-padding-x" id='grid'>
                {/*<Receipt size={this.state.size} takenDown={this.state.takenDown} wallMount={this.state.wallMount} wallType={this.state.wallType} cords={this.state.cords} externalDevices={this.state.externalDevices}/>*/}
                <div className="cell medium-6 large-8">
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
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('size', "Up to 32\""))}>Up to 32"</a>
                                    <a className="button 33" price="40" onClick={booking => this.setState(byPropKey('size', "33\" - 44\""))}>33" - 44"</a>
                                    <a className="button 45" price="80" onClick={booking => this.setState(byPropKey('size', "45\" or larger"))}>45" or larger</a>
                                </div>
                            </label>
                            <label>Does your TV needs to be taken down?
                            <br></br>
                                <div className="button-group">
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('takenDown', "no"))}>No</a>
                                    <a className="button taken yes" price="60" onClick={booking => this.setState(byPropKey('takenDown', "yes"))}>Yes</a>
                                </div>
                            </label>
                            <label>Do you need a wall mount for your TV?
                            <br></br>
                                <div className="button-group">
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('wallMount', "no"))}>I already have one</a>
                                    <a className="button" price="30" onClick={booking => this.setState(byPropKey('wallMount', "fixed"))}>Fixed</a>
                                    <a className="button" price="40" onClick={booking => this.setState(byPropKey('wallMount', "tilting"))}>Tilting</a>
                                    <a className="button" price="50" onClick={booking => this.setState(byPropKey('wallMount', "full motion"))}>Full Motion</a>
                                </div>
                            </label>
                            <label>What type of wall will your TV be mounted on?
                            <br></br>
                                <div className="button-group">
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('wallType', "Drywall, Plaster or Wood"))}>Drywall, Plaster, or Wood</a>
                                    <a className="button" price="35" onClick={booking => this.setState(byPropKey('wallType', "Brick or concrete"))}>Brick or Concrete</a>
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('wallType', "Doesn't know"))}>I don't know</a>
                                </div>
                            </label>
                            <label>How should we handle the cords?
                            <br></br>
                                <div className="button-group">
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('cords', "as is"))}>Leave as is</a>
                                    <a className="button" price="30" onClick={booking => this.setState(byPropKey('cords', "bundle \& cover"))}>Bundle & Conver</a>
                                </div>
                            </label>
                            <label>Do you have external devices to connect?
                            <br></br>
                                <div className="button-group">
                                    <a className="button" price="0" onClick={booking => this.setState(byPropKey('externalDevices', "no"))}>No devices</a>
                                    <a className="button" price="15" onClick={booking => this.setState(byPropKey('externalDevices', "one or more devices"))}>One or more devices</a>
                                </div>
                            </label>
                            <button className="hollow button" href="#" onClick={this.calculator}>Calculator</button>
                            <button className="hollow button" href="#" onClick={this.addBooking}>Book</button>
                        </div>

                    </div>
                </div>
                <div className="cell medium-6 large-4" id="receiptDiv">
                    {/*<Receipt price={this.state.price}/>*/}
                </div>
                {/*{this.state.showReceipt ? <Receipt price={this.state.price} /> : null}*/}
                {console.log("Name: " + this.state.fName + " " + this.state.lName + "\nEmail: " + this.state.uEmail + "\nZip: " + this.state.uZip)}
            </div>
        );
    }
}

export default BookWorker;