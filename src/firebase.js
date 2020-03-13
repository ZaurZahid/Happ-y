import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyA-r30GKTI5kW4pv-9DwJJ7_perN7GJPZg",
    authDomain: "happy-4d58f.firebaseapp.com",
    databaseURL: "https://happy-4d58f.firebaseio.com",
    projectId: "happy-4d58f",
    storageBucket: "happy-4d58f.appspot.com",
    messagingSenderId: "731768406238",
    appId: "1:731768406238:web:b943c5194690848639824f",
    measurementId: "G-5JZT475N6V"
};
firebase.initializeApp(config);

export default firebase;