import React, { Component } from 'react';

class Receipt extends Component {


    constructor(props){
        super(props);
        this.state = {
            /*size: this.props.size,
            takenDown: this.props.takenDown,
            wallMount: this.props.wallMount,
            wallType: this.props.wallType,
            cords: this.props.wallType,
            externalDevices: this.props.externalDevices,*/
            price: this.props.price,
        }

        //this.calculator = this.calculator.bind(this);
    }

    /*calculator(){
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
    }*/

    render() {
        return (
            <div>
                <div className="card float-right" style={{width: 300}}>
                    <div className="card-divider">
                        <h4>TV Mounting</h4>
                    </div>
                    <div className="card-section">
                        <p>Current price: {this.state.price}</p>
                    </div>
                    <button className="hollow button" href="#">Continue</button>
                </div>
            </div>
        );
    }
}

export default Receipt;
