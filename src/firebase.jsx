import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  appId: "1:261201919214:web:4a1c7118ee50e5b58d47ff",
  apiKey: "AIzaSyDqdeVw1XSrrBZeG75_HFGz_mlralCsUSU",
  authDomain: "vamsi-portfolio-313f3.firebaseapp.com",
  databaseURL: "https://vamsi-portfolio-313f3.firebaseio.com",
  projectId: "vamsi-portfolio-313f3",
  storageBucket: "vamsi-portfolio-313f3.appspot.com",
  messagingSenderId: "261201919214",
});

var db = firebaseApp.firestore();

export { db };
