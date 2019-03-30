import React, { Component } from 'react';
import * as firebase from 'firebase';
import './WorkerHomepage.css';
import tv from '../Images/jens-kreuter-85328-unsplash.jpg';
import ReactModal from 'react-modal';

import MapContainer from "./GoogleMapsContainer";


var authUser;

class WorkerHomepage extends Component {
    constructor(props) {
        super(props);
        this.getBookings = this.getBookings.bind(this);
        this.pickBooking = this.pickBooking.bind(this);
        this.state = {
            authUser: this.props.authUser,
            showModal: false,
            jobID: "",
            longitude: "",
            latitude: "",
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            authUser: this.props.authUser,
        });
        authUser = this.state.authUser;
        this.getBookings(authUser);
        console.log("var: " + authUser);
        console.log("state: " + this.state.authUser);
    }

    async handleOpenModal() {
        var id = this.state.jobID;
        var job = firebase.database().ref().child("Reservations").child(id);
        var lon;
        var lat;
        await job.on("value", function (snap) {
            lon = snap.child("Location").child("Longitude").val();
            lat = snap.child("Location").child("Latitude").val();
        })

        await this.setState({
            longitude: lon,
            latitude: lat,
        });
        console.log("Var lon: " + lon + " lat: " + lat);
        console.log("state lon: " + this.state.longitude + " lat " + this.state.latitude);
        this.setState({
            showModal: true,
        });
        console.log("Modal");
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    pickBooking(authUser, id, address, tvs, price, date) {
        var ref = firebase.database().ref().child("Users").child(authUser.uid).child("Jobs");
        ref.set(id);
        ref.child(id).set({
            "id": id,
            "address": address,
            "tvs": tvs,
            "price": price,
            "date": date,
        });
    }

    getBookings(authUser) {
        var bookings = firebase.database().ref().child("Reservations");
        var print = document.getElementById("callout");


        bookings.on("child_added", snap => {
            var gridDiv = document.createElement("div");
            gridDiv.className = "grid-x";

            var column1 = document.createElement("div");
            column1.className = "cell small-6";
            var column2 = document.createElement("div");
            column2.className = "cell small-6";

            var dbid = snap.child("id").val();
            console.log("F DbID: " + dbid);

            var address = snap.child("Address").val();
            var tvs = snap.child("Number of TVs").val();

            var price = snap.child("Price").val();
            var date = snap.child("Date").val();

            var card = document.createElement('div');
            card.setAttribute("class", "card");
            card.id = "bookings";
            var image = document.createElement('img');
            image.className = "images";
            image.setAttribute("src", tv);

            card.appendChild(image);

            var printJobName = document.createElement('h2');
            printJobName.setAttribute("class", "jobName");
            printJobName.setAttribute("id", "jobName");

            //Agregar lectura de la base de datos
            printJobName.appendChild(document.createTextNode("TV Mounting"));
            //-----------------------

            var printDate = document.createElement('h2');
            printDate.setAttribute("class", "dates");
            printDate.appendChild(document.createTextNode(date));

            var printZipText = document.createElement('h2');
            printZipText.setAttribute("class", "subTitles");
            printZipText.appendChild(document.createTextNode("Zip Code"));

            var printAddress = document.createElement('h4');
            printAddress.setAttribute("class", "data")
            printAddress.appendChild(document.createTextNode(address));

            var printQuantityText = document.createElement('h3');
            printQuantityText.setAttribute('class', 'subTitles');
            printQuantityText.appendChild(document.createTextNode("Quantity"));

            var printTVs = document.createElement('h4');
            printTVs.setAttribute("class", "data");
            printTVs.appendChild(document.createTextNode(tvs));

            var printExternalDevicesText = document.createElement('h3');
            printExternalDevicesText.setAttribute('class', 'subTitles');
            printExternalDevicesText.appendChild(document.createTextNode("External Devices"));

            var printExternalDevices = document.createElement('h4');
            printExternalDevices.setAttribute("class", "data");
            //Leer de la base de datos
            printExternalDevices.appendChild(document.createTextNode("One or more"));
            //-------------------------------

            var printWallTypeText = document.createElement('h3');
            printWallTypeText.setAttribute('class', 'subTitles');
            printWallTypeText.appendChild(document.createTextNode("Wall Type"));

            var printWallType = document.createElement('h4');
            printWallType.setAttribute("class", "data");
            //Leer de la base de datos
            printWallType.appendChild(document.createTextNode("Brick"));
            //-------------------------------

            /*var printPrice = document.createElement('h1');
            printPrice.appendChild(document.createTextNode(price));*/

            var detailsButton = document.createElement("button");
            detailsButton.appendChild(document.createTextNode("Details"));
            detailsButton.setAttribute("class", "button");
            detailsButton.setAttribute("id", "detailsButton");
            detailsButton.onmouseover = () => {
                this.setState({ "jobID": dbid });
                console.log("dbid: " + dbid);
                console.log("state: " + this.state.jobID);
            }
            detailsButton.onclick = this.handleOpenModal;

            var pickButton = document.createElement("button");
            pickButton.appendChild(document.createTextNode("Pick"));
            pickButton.setAttribute("class", "button");
            pickButton.setAttribute("id", "pickButton");
            //pickButton.setAttribute("dbid",);
            //pickButton.setAttribute("onClick", this.pickBooking(authUser, dbid, address, tvs, price, date));
            pickButton.onclick = () => { this.pickBooking(authUser, dbid, address, tvs, price, date) };

            column1.appendChild(printZipText);
            column1.appendChild(printAddress);
            column1.appendChild(printQuantityText);
            column1.appendChild(printTVs);
            column2.appendChild(printExternalDevicesText);
            column2.appendChild(printExternalDevices);
            column2.appendChild(printWallTypeText);
            column2.appendChild(printWallType);

            column1.appendChild(pickButton);
            column2.appendChild(detailsButton);

            gridDiv.appendChild(column1);
            gridDiv.appendChild(column2);

            card.appendChild(printJobName);
            card.appendChild(printDate);

            card.appendChild(gridDiv);
            /*card.appendChild(printZipText);
            card.appendChild(printAddress);
            card.appendChild(printQuantityText);
            card.appendChild(printTVs);
            card.appendChild(printExternalDevicesText);
            card.appendChild(printExternalDevices);
            card.appendChild(printWallTypeText);
            card.appendChild(printWallType);*/
            //card.appendChild(printPrice);
            print.appendChild(card);
        })
    }

    render() {
        const style = {
            /*width: '50vw',
            height: '75vh',*/
            width: '30vw',
            height: '85vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }

        return (
            <div>
                <div className="content" id="callout">
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div id="heading-modal">
                        <button className="hollow button" id="close-button" onClick={this.handleCloseModal}><span uk-icon="close"></span>Close</button>
                        {console.log("lat: " + this.state.latitude + " lng: " + this.state.longitude)}
                        <MapContainer style={style} center={{
                            lat: this.state.latitude,
                            lng: this.state.longitude,
                        }} />
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default WorkerHomepage;