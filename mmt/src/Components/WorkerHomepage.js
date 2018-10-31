import React, { Component } from 'react';
import * as firebase from 'firebase';
import './WorkerHomepage.css';
import tv from '../Images/jens-kreuter-85328-unsplash.jpg';


class WorkerHomepage extends Component {
    constructor(props) {
        super(props);
        this.getBookings = this.getBookings.bind(this);
    }

    componentDidMount() {
        this.getBookings();
    }

    getBookings() {
        var bookings = firebase.database().ref().child("Reservations");
        var print = document.getElementById("callout");


        bookings.on("child_added", snap => {
            var gridDiv = document.createElement("div");
            gridDiv.className = "grid-x";

            var column1 = document.createElement("div");
            column1.className = "cell small-6";
            var column2 = document.createElement("div");
            column2.className = "cell small-6";

            var address = snap.child("Address").val();
            var tvs = snap.child("Number of TVs").val();

            var price = snap.child("Price").val();
            var date = snap.child("Date").val();

            var card = document.createElement('div');
            card.setAttribute("class", "card");
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
            detailsButton.setAttribute("class","button");
            detailsButton.setAttribute("id","detailsButton");

            var pickButton = document.createElement("button");
            pickButton.appendChild(document.createTextNode("Pick"));
            pickButton.setAttribute("class","button");
            pickButton.setAttribute("id","pickButton");

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
        return (
            <div className="content" id="callout">
                
            </div>
        );
    }
}

export default WorkerHomepage;