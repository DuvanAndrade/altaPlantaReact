import DATA from './data.json' assert { type: 'json'}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0agh07YREsrFcFzuYToIagkiQYALKS0E",
  authDomain: "altaplanta-68351.firebaseapp.com",
  projectId: "altaplanta-68351",
  storageBucket: "altaplanta-68351.appspot.com",
  messagingSenderId: "775879273009",
  appId: "1:775879273009:web:82eebc8d4a8e8394ffc310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productosRef = collection(db,'productos')

DATA.forEach(item =>{
    delete item.id
    addDoc(productosRef, item)
    
})
