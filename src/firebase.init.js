// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2-F8ExzWKBtfsA53Pyj1M_3TlHPmrZLo",
    authDomain: "civil-engg-consultant.firebaseapp.com",
    projectId: "civil-engg-consultant",
    storageBucket: "civil-engg-consultant.appspot.com",
    messagingSenderId: "960596668939",
    appId: "1:960596668939:web:5697dfb9080fdeb81d0d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;