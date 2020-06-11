import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDn0ifnowz08OzYtpTGyJrX5b0KogN6ZO4",
    authDomain: "sportcalendarkz-eb77c.firebaseapp.com",
    databaseURL: "https://sportcalendarkz-eb77c.firebaseio.com",
    projectId: "sportcalendarkz-eb77c",
    storageBucket: "sportcalendarkz-eb77c.appspot.com",
    messagingSenderId: "826003715165",
    appId: "1:826003715165:web:559cc196cc93d3fb"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 