import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDGffWe1BzHTWtNjRNSmBROwQ6Ap6GpP0Q",
  authDomain: "react-car-search.firebaseapp.com",
  databaseURL: "https://react-car-search.firebaseio.com",
  projectId: "react-car-search",
  storageBucket: "react-car-search.appspot.com",
  messagingSenderId: "846607185579",
  appId: "1:846607185579:web:d8d854a10a8bf5127569ee",
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectStorage = firebase.storage();

export { db, auth, projectStorage, timestamp };
