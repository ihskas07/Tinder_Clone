import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = 
{
    apiKey: "AIzaSyALoHnScjbKKnF1NC0JIBQKMgYCf5KNGtg",
    authDomain: "tinder-3e8fc.firebaseapp.com",
    projectId: "tinder-3e8fc",
    storageBucket: "tinder-3e8fc.appspot.com",
    messagingSenderId: "669151352373",
    appId: "1:669151352373:web:df130097d80f20b4b2037c",
    measurementId: "G-0WJD82F2M5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;