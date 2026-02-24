// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // if you use storage

const firebaseConfig = {
  apiKey: "AIzaSyDq70rxiVjNaHArtokZbj_ZZ65QbS1WIHQ",
  authDomain: "clone-55889.firebaseapp.com",
  projectId: "clone-55889",
  storageBucket: "clone-55889.firebasestorage.app",
  messagingSenderId: "827870500164",
  appId: "1:827870500164:web:79669facef04324f3ab311",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // if you use Firebase Storage
 export default app;