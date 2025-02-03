// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYQzd5o1qAgN4J4sZkaMVu7P_7CTBUayo",
  authDomain: "netflix-clone-bdcc9.firebaseapp.com",
  projectId: "netflix-clone-bdcc9",
  storageBucket: "netflix-clone-bdcc9.firebasestorage.app",
  messagingSenderId: "257285160661",
  appId: "1:257285160661:web:86b0554418b2fd79f82c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
export default app;