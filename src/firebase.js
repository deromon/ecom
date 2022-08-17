// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyD5ySdfr295wDYb0MZsg4OSfLItSN3gy3g",
    authDomain: "ecom-21344.firebaseapp.com",
    projectId: "ecom-21344",
    storageBucket: "ecom-21344.appspot.com",
    messagingSenderId: "938730676198",
    appId: "1:938730676198:web:0f52fb4b67d950a87b8027",
    measurementId: "G-10VK90R7EF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};

