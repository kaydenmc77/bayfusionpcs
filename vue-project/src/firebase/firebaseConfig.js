// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSihdhxBnJg82z7yK31m_9ZKHPo7_JUTI",
    authDomain: "bayfusion-pcs-1358c.firebaseapp.com",
    projectId: "bayfusion-pcs-1358c",
    storageBucket: "bayfusion-pcs-1358c.appspot.com",
    messagingSenderId: "541344373559",
    appId: "1:541344373559:web:856680861c46a5cb6998b2",
    measurementId: "G-JELWGV755R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init firestore service
const db = getFirestore()
export default db