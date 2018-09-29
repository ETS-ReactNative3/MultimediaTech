import React, { Component } from 'react';
import * as routes from '../Constants/Routes';
import { Link } from 'react-router-dom';
import WorkerInfo from './WorkerInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class CreateWorker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //States
            wFName: '',
            wLName: '',
            wEmail: '',
            wZip: '',
        };
    }

    render() {

        const {
            wFName,
            wLName,
            wEmail,
            wZip,
        } = this.state;

        return (
            <div>
                <div className="callout large">
                    <h5>This is a large callout</h5>
                    <h4>Become a PRO</h4>
                    <form>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="medium-6 cell">

                                    <label>First Name
                                        <input id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            value={wFName}
                                            onChange={event => this.setState(byPropKey('uFName', event.target.value))}
                                        />
                                    </label>
                                </div>
                                <div className="medium-6 cell">
                                    <label>Last Name
                                    <input id="lastName"
                                            type="text"
                                            placeholder=".medium-6.cell"
                                            value={wLName}
                                            onChange={booking => this.setState(byPropKey('uLName', booking.target.value))}
                                        />

                                    </label>
                                </div>
                                <div className="medium-6 cell">
                                    <label>Email

                                        <input id="email"
                                            type="text"
                                            placeholder=".medium-6.cell"
                                            value={wEmail}
                                            onChange={booking => this.setState(byPropKey('uEmail', booking.target.value))}
                                        />

                                    </label>
                                </div>
                                <div className="medium-6 cell">
                                    <label>Zip Code
                                        <input id="zip"
                                            type="text"
                                            placeholder=".medium-6.cell"
                                            value={wZip}
                                            onChange={booking => this.setState(byPropKey('uZip', booking.target.value))}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Router>
                        <Route
                            exact path={routes.WORKER_INFO}
                            component={() => <WorkerInfo />}
                        />
                    </Router>
                    <Link to={routes.WORKER_INFO}>
                        <button className="hollow button" href="#" >Submit</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CreateWorker;