import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRLFt2-6R-Qulv9teAvDCwc7GQBT8wMyY",
  authDomain: "twitter-clone-781b6.firebaseapp.com",
  projectId: "twitter-clone-781b6",
  storageBucket: "twitter-clone-781b6.appspot.com",
  messagingSenderId: "917187045833",
  appId: "1:917187045833:web:12d53ed87e4fd68e8c6018",
  measurementId: "G-NNJ5XRQVV2"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
