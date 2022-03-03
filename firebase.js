// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGmYmvHyRQEPs3liJhwA0G_xnEu7If6CY",
  authDomain: "login-auth-87f4b.firebaseapp.com",
  projectId: "login-auth-87f4b",
  storageBucket: "login-auth-87f4b.appspot.com",
  messagingSenderId: "830145389178",
  appId: "1:830145389178:web:8ffa2530e9f282234a51c3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };