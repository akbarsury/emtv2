// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCprJk8q_WfSlpGSNvtK_S1kRzDzEXG3A0",
    authDomain: "app-emt.firebaseapp.com",
    projectId: "app-emt",
    storageBucket: "app-emt.appspot.com",
    messagingSenderId: "461077002545",
    appId: "1:461077002545:web:d7b026093bd1094efdd810",
    measurementId: "G-GJN54DHEWQ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const Analytics = getAnalytics(firebase);
const Firestore = getFirestore(firebase);
const Authentication = getAuth(firebase);

export { Analytics, Firestore, Authentication }