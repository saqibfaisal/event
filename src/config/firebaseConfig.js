// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxKJ2WlSGJrWLYnib0wfZjLvWimN3pnZY",
    authDomain: "event-60c95.firebaseapp.com",
    projectId: "event-60c95",
    storageBucket: "event-60c95.appspot.com",
    messagingSenderId: "24192446897",
    appId: "1:24192446897:web:a58d9062004005606ecd90",
    measurementId: "G-BJQ1SE0BE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;