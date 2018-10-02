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


class App extends Component {
  render() {
    var cardStyles = {
      width: '250px',
      height: '250px',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <NavBar />

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
          </div>
        </Router>
        <br></br>
        {/*<Booking style={cardStyles} />*/}
      </div>
    );
  }
}

export default App;
