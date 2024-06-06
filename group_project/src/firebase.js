import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw0HJqsOhy8QJvHmQfgxx1qxefDMa8lBU",
  authDomain: "project-dca7d.firebaseapp.com",
  projectId: "project-dca7d",
  storageBucket: "project-dca7d.appspot.com",
  messagingSenderId: "25737339701",
  appId: "1:25737339701:web:1731a47d781b02a9e8227c",
  measurementId: "G-8ZTK6EDHG4",
  clientId: "25737339701-ov14i213n9abuo9sibq4me9nnsst0t2m.apps.googleusercontent.com", 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider, signInWithPopup, doc, getDoc, setDoc };
