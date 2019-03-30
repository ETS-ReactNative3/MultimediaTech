import React, { Component } from 'react';
import * as firebase from 'firebase';



const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class WorkerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: this.props.authUser,
            wNumber: '',
            wAddress: '',
            wAPTNumber: '',
            wCity: '',
            wState: '',
            id: '',
        };
        this.addWorker = this.addWorker.bind(this);
    }
    async componentDidMount() {
        await this.setState({
            id: this.props.authUser.uid,
        });
        console.log("id STATE: " + this.state.id)
        console.log("auth user: " + this.props.authUser.uid)
    }

    addWorker() {

        const ref = firebase.database().ref();
        var userInfo = [];



        var createWorkerRef = ref.child("Users").child(this.state.id);
        //Worker 1 es true
        createWorkerRef.child("Worker").set("1");
        createWorkerRef.child("WorkerInfo").set({
            "Work Phone Number": this.state.wNumber,
            "Work Address": this.state.wAddress,
            "Work Zip": 'props',
            "Work APT Number": this.state.wAPTNumber,
            "Work City": this.state.wCity,
            "Work State": this.state.wState,
            "Hola": "hola",
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
