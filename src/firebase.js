import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMKT9OqILvWQzXumduzFeDtvDQeuCjfw8",
  authDomain: "slack-clone-da5b1.firebaseapp.com",
  projectId: "slack-clone-da5b1",
  storageBucket: "slack-clone-da5b1.appspot.com",
  messagingSenderId: "135001855277",
  appId: "1:135001855277:web:01b5b662ee5e75a64a2fa4",
  measurementId: "G-SWYDFXKV6J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //allows access the db from any other file and to create a firestore database
const auth = firebase.auth(); //for authentication purposes
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
