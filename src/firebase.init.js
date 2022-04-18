// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOoRBQTypFB3UuvcIqdAnMezXIvOcBOt8",
    authDomain: "independent-service-79461.firebaseapp.com",
    projectId: "independent-service-79461",
    storageBucket: "independent-service-79461.appspot.com",
    messagingSenderId: "12854527428",
    appId: "1:12854527428:web:7625bea910169a90745091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
