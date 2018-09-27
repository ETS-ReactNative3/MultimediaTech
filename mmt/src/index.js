import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'foundation-sites';


var config = {
    apiKey: "AIzaSyB5AK8qGf_KxO4TdVu6LANHxGv0biAlHuE",
    authDomain: "multimedia-tech.firebaseapp.com",
    databaseURL: "https://multimedia-tech.firebaseio.com",
    projectId: "multimedia-tech",
    storageBucket: "multimedia-tech.appspot.com",
    messagingSenderId: "294358208892"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 