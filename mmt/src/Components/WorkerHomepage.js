import React, { Component } from 'react';
import * as firebase from 'firebase';

class WorkerHomepage extends Component {
    constructor(props) {
        super(props);
        this.getBookings = this.getBookings.bind(this);
    }
    
    componentDidMount(){
        this.getBookings();
    }

    getBookings(){
        var bookings = firebase.database().ref().child("Reservations");
        var print = document.getElementById("callout");

        bookings.on("child_added", snap => {
            var address = snap.child("Address").val();
            var tvs = snap.child("Number of TVs").val();
            var price = snap.child("Price").val();
            var date = snap.child("Date").val();

            var card = document.createElement('div');
            card.setAttribute("class", "card");
            card.setAttribute("style", "width: 300px;")
            var image = document.createElement('img');
            image.className = "images";
            image.setAttribute("src", "https://images.unsplash.com/photo-1529338215083-dfbce6338219?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2ba0f54146ead08eb446317fc870cb&auto=format&fit=crop&w=628&q=80 628w");

            card.appendChild(image);

            var printAddress = document.createElement('h2');
            printAddress.appendChild(document.createTextNode(address));

            var printTVs = document.createElement('h3');
            printTVs.appendChild(document.createTextNode(tvs));

            var printDate = document.createElement('h2');
            printDate.appendChild(document.createTextNode(date));

            var printPrice = document.createElement('h1');
            printPrice.appendChild(document.createTextNode(price));

            card.appendChild(printAddress);
            card.appendChild(printTVs);
            card.appendChild(printDate);
            card.appendChild(printPrice);

            print.appendChild(card);

        })
    }

    render() {
        return (
            <div className="callout large" id="callout">
                
            </div>
        );
    }
}

export default WorkerHomepage;