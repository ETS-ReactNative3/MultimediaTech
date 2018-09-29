import React, { Component } from 'react';
import 'foundation-sites';
import './WorkerProfile.css';
import * as firebase from 'firebase';




class WorkerProfile extends Component {
    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);
    }
    
    getProfile(){
        var profile = firebase.database().ref().child("Workers");
        workers.on("child_added", snap => {
            //var email = snap.child("First Name").val();
            //Hacer validacion con props
            var name = snap.child("First Name").val() + " " + snap.child("Last Name").val();
            var city = snap.child("City").val();
            //Number of years working
            //Number of jobs completed
            //Positive reviews
            
        })
    }

    render() {
        return (
            <div class="grid-x" id='grid'>
                <div class="cell small-4">
                <br></br>
                <br></br>
                <br></br>
                    <h1>oracle</h1>
                    <p>Costra</p>
                </div>
                <div class="cell auto">
                <br></br>
                <br></br>
                <br></br>
                    <h1>oracle</h1>
                    <p>Costra</p>
                </div>
            </div>
        );
    }
}

export default WorkerProfile;
