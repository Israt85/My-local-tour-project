// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHkcbG-L3xI8y8mjSX9fubacVYwZ8RsUM",
  authDomain: "my-local-tour-guide.firebaseapp.com",
  projectId: "my-local-tour-guide",
  storageBucket: "my-local-tour-guide.appspot.com",
  messagingSenderId: "951365858436",
  appId: "1:951365858436:web:0a7fc1a3aba81015553ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;