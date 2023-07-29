// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    serverTimestamp
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//auth
import {
    getAuth
} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDg3VQxiDEM1W-YbYU_76GU9_Xt1UhqmV8",
    authDomain: "todolist-fe56d.firebaseapp.com",
    projectId: "todolist-fe56d",
    storageBucket: "todolist-fe56d.appspot.com",
    messagingSenderId: "667517221488",
    appId: "1:667517221488:web:c2e7f8695b497d3c2f52b5",
    measurementId: "G-1RH11CP7FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);
const timestamp = serverTimestamp()
export {
    db,
    timestamp,
    auth
};