import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAxM-OTAJLzusvYYJQ9_ToImRnPJ45auX8",
    authDomain: "tiendamia-62da9.firebaseapp.com",
    projectId: "tiendamia-62da9",
    storageBucket: "tiendamia-62da9.appspot.com",
    messagingSenderId: "1007008085627",
    appId: "1:1007008085627:web:97ca30ff84b3990e5494de"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

