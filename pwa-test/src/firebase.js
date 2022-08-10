import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBoTMGBYR2tPG2moXk6Tr-Au88jgFwf7H8",
    authDomain: "pwa-project-cbeb6.firebaseapp.com",
    projectId: "pwa-project-cbeb6",
    storageBucket: "pwa-project-cbeb6.appspot.com",
    messagingSenderId: "734121547475",
    appId: "1:734121547475:web:a10f03c800497e4d10a626",
    measurementId: "G-C5B3ZD1PKV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase