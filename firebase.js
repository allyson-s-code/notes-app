import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLzthc_j1GmNbRO0MWEffP2vlaq0k7UWA",
  authDomain: "react-notes-347cd.firebaseapp.com",
  projectId: "react-notes-347cd",
  storageBucket: "react-notes-347cd.appspot.com",
  messagingSenderId: "150063582824",
  appId: "1:150063582824:web:d92c5a60e1f2f4cf0c35dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
