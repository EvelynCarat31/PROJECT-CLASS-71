import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyCbGnpXk5SNWKlmC_A0L2qi7LMw3dSGjMk",
    authDomain: "e-ride-b7448.firebaseapp.com",
    projectId: "e-ride-b7448",
    storageBucket: "e-ride-b7448.appspot.com",
    messagingSenderId: "164646929713",
    appId: "1:164646929713:web:1322cefdbefbb832df1c10"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
