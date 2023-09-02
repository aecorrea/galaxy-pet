import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0IDQ8k1CUNPn4gvh3ZlzP4TfCEhIv5iU",
  authDomain: "pet-galaxy-store.firebaseapp.com",
  projectId: "pet-galaxy-store",
  storageBucket: "pet-galaxy-store.appspot.com",
  messagingSenderId: "1033982010336",
  appId: "1:1033982010336:web:1f542ee3daa761e1d00185",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
