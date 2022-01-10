import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//const API_KEY = {REACT_APP_FIREBASE_API}
const firebaseConfig = {
  apiKey: "AIzaSyBlfQS_fryKpqkXss0lhpPWf8tGTFs00hQ",
  authDomain: "map-pad.firebaseapp.com",
  projectId: "map-pad",
  storageBucket: "map-pad.appspot.com",
  messagingSenderId: "816706936700",
  appId: "1:816706936700:web:746876a2bde67a2fb6cef9",
  measurementId: "G-WZTVSVEPZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

