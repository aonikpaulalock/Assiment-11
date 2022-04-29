import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDv9usZwFSXo9mK4bc7HO-xPJP3ZtoTr4",
  authDomain: "backend-assiment-11.firebaseapp.com",
  projectId: "backend-assiment-11",
  storageBucket: "backend-assiment-11.appspot.com",
  messagingSenderId: "1054902333670",
  appId: "1:1054902333670:web:f984ed38d16ab311528b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;