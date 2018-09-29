import React, { Component } from 'react';
import * as firebase from 'firebase';


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class WorkerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wNumber: '',
            wAddress: '',
            wAPTNumber: '',
            wCity: '',
            wState: '',
        };
        this.addWorker = this.addWorker.bind(this);
    }

    addWorker() {
        var createWorkerRef = firebase.database().ref().child("Workers");
        var key = createWorkerRef.push().getKey();

        createWorkerRef.child(key).set({
            "First Name": 'props',
            "Last Name": 'props',
            "Email": 'props',
            "Phone Number": this.state.wNumber,
            "Address": this.state.wAddress,
            "Zip": 'props',
            "APT Number": this.state.wAPTNumber,
            "City": this.state.wCity,
            "State": this.state.wState,
            "Key": key,
        })
        alert("add");
    }


    render() {

        const {
            wNumber,
            wNumberConfirm,
            wAddress,
            wAPTNumber,
            wCity,
            wState,
        } = this.state;

        return (
            <div>
                <div className="card float-center" style={{ width: 600 }}>
                    <div className="card-divider">
                        Additional Information
                    </div>
                    <div className="card-section">
                        <h4>Worker Info</h4>
                        <form>
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                    <div className="medium-6 cell">

                                        <label>Mobile Phone Number
                                        <input id="phoneNumber"
                                                type="text"
                                                placeholder="First Name"
                                                value={wNumber}
                                                onChange={event => this.setState(byPropKey('wNumber', event.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Confirm Mobile Phone Number
                                            <input id="confirmPhoneNumber"
                                                type="text"
                                                placeholder="First Name"
                                                value={wNumber}
                                                onChange={event => wNumberConfirm = event.target.value}
                                            /*if(this.state.wNumber != wNumberConfirm){
                                                console.log("No ha ingresado el numero correctamente");
                                            }}}
                                            UI/UX: Hacer que aparezca un simbolo de advertencia*/
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Address
                                            <input id="address"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={wAddress}
                                                onChange={event => this.setState(byPropKey('wAddress', event.target.value))}
                                            />

                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>Apartment number

                                        <input id="aptNumber"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={wAPTNumber}
                                                onChange={event => this.setState(byPropKey('wAPTNumber', event.target.value))}
                                            />

                                        </label>
                                    </div>
                                    <div className="medium-6 cell">
                                        <label>City 
                                        <input id="city"
                                                type="text"
                                                placeholder=".medium-6.cell"
                                                value={wCity}
                                                onChange={event => this.setState(byPropKey('wCity', event.target.value))}
                                            />
                                        </label>
                                    </div>
                                    <div className="medium-6 cell">

                                        <label>State
                                            <input id="State"
                                                type="text"
                                                value={wState}
                                                onChange={event => this.setState(byPropKey('wState', event.target.value))}
                                            />

                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className="hollow button" href="#" onClick={this.addWorker}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkerInfo;
