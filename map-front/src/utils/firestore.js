import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlfQS_fryKpqkXss0lhpPWf8tGTFs00hQ",
  authDomain: "map-pad.firebaseapp.com",
  projectId: "map-pad",
  storageBucket: "map-pad.appspot.com",
  messagingSenderId: "816706936700",
  appId: "1:816706936700:web:746876a2bde67a2fb6cef9",
  measurementId: "G-WZTVSVEPZ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });