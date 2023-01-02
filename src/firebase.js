import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD44_amxfd5LAtxA47u7NR6j6PBtW5uHp0",
    authDomain: "netflix-clone-64c39.firebaseapp.com",
    projectId: "netflix-clone-64c39",
    storageBucket: "netflix-clone-64c39.appspot.com",
    messagingSenderId: "578764101262",
    appId: "1:578764101262:web:732b5f7a22926132e81bdf"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,
  onAuthStateChanged};
export default db;