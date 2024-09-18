// // Import the necessary Firebase services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfRh237dXADZl7zil2iZNe9FjwkObmfyc",
  authDomain: "dinesy-ebe66.firebaseapp.com",
  projectId: "dinesy-ebe66",
  storageBucket: "dinesy-ebe66.appspot.com",
  messagingSenderId: "803901094971",
  appId: "1:803901094971:web:52a80335fe137a1c97301e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
