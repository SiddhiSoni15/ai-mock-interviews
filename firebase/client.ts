
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASc67Z4SRknRMzLfqgJcK0olXbIIora7k",
  authDomain: "prepwise-ebfe9.firebaseapp.com",
  projectId: "prepwise-ebfe9",
  storageBucket: "prepwise-ebfe9.firebasestorage.app",
  messagingSenderId: "823035653027",
  appId: "1:823035653027:web:da10473ba83433901f0816",
  measurementId: "G-QD4GW7K00Y"
};


const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);
