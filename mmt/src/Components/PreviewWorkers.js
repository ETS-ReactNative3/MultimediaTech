import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'foundation-sites';

class PreviewWorkers extends Component {

    constructor(props) {
        super(props);
        this.getWorkers = this.getWorkers.bind(this);
    }
    

    componentDidMount(){
        this.getWorkers();
    }

    getWorkers(){
        var workers = firebase.database().ref().child("Workers");
        var print = document.getElementById("showWorkers");

        workers.on("child_added", snap => {
            //Get info from database
            var wFName = snap.child("First Name").val();
            var wLName = snap.child("Last Name").val();
            var wCity = snap.child("City").val();

            var parent = document.createElement('div');
            parent.className = "w3-button w3-round-xlarge zoom";
            var card = document.createElement('div');
            card.setAttribute("id", "worker");
            card.setAttribute("class", "card");

            //Might not work
            card.setAttribute("style", "width: 300px;")
            //---------------

            var image = document.createElement('img');
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

            print.appendChild(parent);

        })
    }

    render() {
        return (
            <div id='showWorkers'>
                
            </div>
        );
    }
}

export default PreviewWorkers;
