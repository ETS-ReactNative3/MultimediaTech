import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './Components/Booking';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { CREATE_WORKER } from './Constants/Routes';
import CreateWorker from './Components/CreateWorker';
//import { Link } from 'react-router-dom';
import * as routes from './Constants/Routes';
import WorkerInfo from './Components/WorkerInfo';
import Homepage from './Components/Homepage';
import 'foundation-sites';
import WorkerProfile from './Components/WorkerProfile';
import SignInPage from './Components/SignInPage';
import SignUpPage from './Components/SignUpPage';
import * as firebase from 'firebase';
import UserProfile from './Components/UserProfile';
import WorkerHomepage from './Components/WorkerHomepage';
import BookingInfo from './Components/BookingInfo';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    })
  }


  render() {
    var cardStyles = {
      width: '250px',
      height: '250px',
    };

    return (
      <div className="App">
        <Router>
          <div>
            <NavBar authUser={this.state.authUser} />

            <Route
              exact path={routes.HOMEPAGE}
              component={() => <Homepage />}
            />
            <Route
              exact path={routes.BOOKING}
              component={() => <Booking />}
            />
            <Route
              exact path={routes.WORKER_PROFILE}
              component={() => <WorkerProfile />}
            />
            <Route
              exact path={routes.CREATE_WORKER}
              component={() => <CreateWorker />}
            />
            <Route
              exact path={routes.WORKER_INFO}
              component={() => <WorkerInfo />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.USER_PROFILE}
              component={() => <UserProfile authUser={this.state.authUser} />}
            />
            <Route
              exact path={routes.WORKER_HOMEPAGE}
              component={() => <WorkerHomepage authUser={this.state.authUser} />}
            />
            <Route
              exact path={routes.BOOKING_INFO}
              component={() => <BookingInfo />}
            />
          </div>
        </Router>
        <br></br>
        {/*<Booking style={cardStyles} />*/}
      </div>
    );
  }
}

export default App;
