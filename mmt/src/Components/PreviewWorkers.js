import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'foundation-sites';
import './PreviewWorkers.css';
import ReactModal from 'react-modal';
import WorkerProfile from './WorkerProfile';


class PreviewWorkers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "",
            city: "",
        }
        this.getWorkers = this.getWorkers.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.getWorkers();
    }

    handleOpenModal() {
        this.setState({ showModal: true });
        var key = this.state.currentWorker;
        var workerRef = firebase.database().ref().child(key);
        var name;
        var city;

        workerRef.on("value", (snapshot) => {
            name = snapshot.child("First Name").val() + " " + snapshot.child("Last Name").val();
            city = snapshot.child("City").val();
        })
        this.setState({
            "name": name,
            "city": city,
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    getWorkers() {
        var workers = firebase.database().ref().child("Workers");
        var print = document.getElementById("callout");

        workers.on("child_added", snap => {
            //Get info from database
            var wFName = snap.child("First Name").val();
            var wLName = snap.child("Last Name").val();
            var wCity = snap.child("City").val();
            var id = snap.child("Key").val();

            var parent = document.createElement('div');
            parent.className = "main";
            var card = document.createElement('div');
            card.setAttribute("id", "worker");
            card.setAttribute("class", "card hollow button");

            //---------------
            card.setAttribute("style", "width: 300px;")
            //---------------

            var image = document.createElement('img');
            image.className = "images";
            image.setAttribute("src", "https://images.unsplash.com/photo-1538102894545-170c37b51c3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8118f51819521b487bd264308d18667&auto=format&fit=crop&w=300&q=60 300w")
            var fName = document.createElement('h1');
            card.appendChild(image);

            fName.setAttribute("id", "workerName");
            fName.id = "worker";
            var lName = document.createElement('h1');
            var city = document.createElement('h2');

            var n1 = document.createTextNode(wFName);
            fName.appendChild(n1);
            var n2 = document.createTextNode(wLName);
            lName.appendChild(n2);
            var c = document.createTextNode(wCity);
            city.appendChild(c);

            card.appendChild(fName);
            card.appendChild(lName);
            card.appendChild(city);

            parent.appendChild(card);

            card.onclick = this.handleOpenModal;

            parent.onmouseover = () => {
                this.setState({ "currentWorker": id });
                console.log(this.state.currentWorker);

            }

            print.appendChild(parent);

        })
    }

    render() {
        return (
            <div className='callout large' id="callout">
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div id="heading-modal">
                        <div id="modal-detail"></div>
                        <WorkerProfile name={this.state.name}
                            city={this.state.city}
                        />
                        <button className="hollow button" id="close-button" onClick={this.handleCloseModal}><span uk-icon="close"></span>Close</button>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default PreviewWorkers;
