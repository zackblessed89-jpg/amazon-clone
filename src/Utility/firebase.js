// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // if you use storage

const firebaseConfig = {
  apiKey: "AIzaSyAe_yxOIqB0qwULguyIlotytWC2KJT1mIQ",
  authDomain: "clone-e4c48.firebaseapp.com",
  projectId: "clone-e4c48",
  storageBucket: "clone-e4c48.appspot.com",
  messagingSenderId: "450513078184",
  appId: "1:450513078184:web:bb1799960d3d7fa1a6bf9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // if you use Firebase Storage
 export default app;