import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApMFBApHAu8Lajpa28nNDHlTUSmg-YE8U",
  authDomain: "crwn-db-82108.firebaseapp.com",
  databaseURL: "https://crwn-db-82108.firebaseio.com",
  projectId: "crwn-db-82108",
  storageBucket: "crwn-db-82108.appspot.com",
  messagingSenderId: "375733914553",
  appId: "1:375733914553:web:e44078fa4568882267c468",
  measurementId: "G-86S7RD1X5M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
