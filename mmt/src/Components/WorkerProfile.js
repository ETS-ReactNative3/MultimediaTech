import React, { Component } from 'react';
import 'foundation-sites';
import './WorkerProfile.css';
import * as firebase from 'firebase';
import ReactModal from 'react-modal';
import BookingInfo from './BookingInfo';
import BookWorker from './BookWorker';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class WorkerProfile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            uZip: '',
            uEmail: '',
            serviceType: '',
            date: '',
            showModal: false,
        }
        this.getProfile = this.getProfile.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.getProfile();
    }

    handleOpenModal(){
        this.setState({ showModal: true });
    }

    handleCloseModal(){
        this.setState({ showModal: false });
    }

    getProfile() {
        var profile = firebase.database().ref().child("Workers");
        var print = document.getElementById("workerProf")
        profile.on("child_added", snap => {
            //var email = snap.child("First Name").val();
            //Hacer validacion con props
            var name = snap.child("First Name").val() + " " + snap.child("Last Name").val();
            var city = snap.child("City").val();
            //Number of years working
            //Number of jobs completed
            //Positive reviews

            var printName = document.createElement('h3');
            printName.appendChild(document.createTextNode(name));
            var printCity = document.createElement('h4');
            printCity.appendChild(document.createTextNode(city));

            print.appendChild(printName);
            print.appendChild(printCity);
        })
    }

    render() {
        const {
            uZip,
            uEmail,
            serviceType,
            date,
        } = this.state;
        return (
            <div className="grid-x align-center" id='grid'>
                <ReactModal
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
                >
                    <div id="heading-modal">
                        <div id="modal-detail"></div>
                        <BookWorker/>
                        <button className="hollow button" id="close-button" onClick={this.handleCloseModal}><span uk-icon="close"></span>Close</button>
                    </div>
                </ReactModal>
                <div className="cell small-4" id="workerProf">
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png" />
                </div>
                <div className="cell auto">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="card" style={{ width: 300 }}>
                        <div className="card-divider">
                            Book this pro
                        </div>
                        <div className="card-section">
                            <h4>Your home</h4>
                            <label>Zip Code
                                <input id="zip"
                                    type="text"
                                    placeholder="Zip code"
                                    value={uZip}
                                    onChange={booking => this.setState(byPropKey('uZip', booking.target.value))}
                                />
                            </label>
                            <label>Type of Service
                                <input id="serviceType"
                                    type="text"
                                    placeholder="Service"
                                    value={serviceType}
                                    onChange={booking => this.setState(byPropKey('uZip', booking.target.value))}
                                />
                            </label>
                            <label>Email
                                <input id="email"
                                    type="text"
                                    placeholder="Email"
                                    value={uEmail}
                                    onChange={booking => this.setState(byPropKey('uEmail', booking.target.value))}
                                />
                            </label>
                            <label>Date
                                <input id="date"
                                    type="date"
                                    placeholder=""
                                    value={date}
                                    onChange={booking => this.setState(byPropKey('date', booking.target.value))}
                                />
                            </label>
                        </div>
                        <button className="hollow button" href="#" onClick={this.handleOpenModal}>Book</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default WorkerProfile;
