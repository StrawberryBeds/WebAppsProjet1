// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUiUWNyXo7z6U6bgfJy33_JzlSoG5y8HQ",
  authDomain: "webappsproject1-27e84.firebaseapp.com",
  projectId: "webappsproject1-27e84",
  storageBucket: "webappsproject1-27e84.firebasestorage.app",
  messagingSenderId: "219187771456",
  appId: "1:219187771456:web:c3172f73f35d65a68847a5",
  measurementId: "G-YXX89XD23E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);