// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwADv7TJ7lCI16P9PeIIHbGyuihN7zZfo",
  authDomain: "sahayak-42925.firebaseapp.com",
  projectId: "sahayak-42925",
  storageBucket: "sahayak-42925.appspot.com",
  messagingSenderId: "455474826470",
  appId: "1:455474826470:web:8ebc04f6c98ccaefab7f27"
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