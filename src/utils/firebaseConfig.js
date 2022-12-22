import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChF77_2cmdEGk7MBN806T05S0i7mRmLxk",
  authDomain: "coder-123.firebaseapp.com",
  projectId: "coder-123",
  storageBucket: "coder-123.appspot.com",
  messagingSenderId: "941225415940",
  appId: "1:941225415940:web:9a4b7a55fd18fca5c32c51",
  measurementId: "G-PVDDR0SMK2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;