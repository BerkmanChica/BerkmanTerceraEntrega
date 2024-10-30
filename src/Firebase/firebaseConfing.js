// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6a1V9vr1WQIN63l3XqOZgXcaThAvOoLw",
    authDomain: "programacion-web-91609.firebaseapp.com",
    projectId: "programacion-web-91609",
    storageBucket: "programacion-web-91609.appspot.com",
    messagingSenderId: "252122055565",
    appId: "1:252122055565:web:4a9b551cb228e4d14e73c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
