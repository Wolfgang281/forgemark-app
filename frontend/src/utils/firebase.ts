import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pixelpeti.firebaseapp.com",
  projectId: "pixelpeti",
  storageBucket: "pixelpeti.firebasestorage.app",
  messagingSenderId: "709412442214",
  appId: "1:709412442214:web:e93fc9086c854702b5dda7",
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

const provider = new GoogleAuthProvider();

export { authentication, provider };
