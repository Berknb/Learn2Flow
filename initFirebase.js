import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const provider = new GoogleAuthProvider();
 export const auth = getAuth();
 export const db = getFirestore();
 
 export function SignGoogle(){
         const googleSignUp = signInWithPopup(auth, provider)
         .then((result) => {
           // This gives you a Google Access Token. You can use it to access the Google API.
           const credential = GoogleAuthProvider.credentialFromResult(result);
           const token = credential.accessToken;
           // The signed-in user info.
           const user = result.user;
           // ...
         }).catch((error) => {
           // Handle Errors here.
           const errorCode = error.code;
           const errorMessage = error.message;
           // The email of the user's account used.
           const email = error.email;
           // The AuthCredential type that was used.
           const credential = GoogleAuthProvider.credentialFromError(error);
           // ...
         });
     }
     export function SignupEmail(email, password){
         return createUserWithEmailAndPassword(auth, email, password)  
      }
      export function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
      }
      export function logout(){
       return signOut(auth);
      }
      export function useAuth(){
       const [ currentUser, setCurrentUser ] = useState();
      
      
        useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
        },[]
        )
      
        return currentUser
      }
      
      
    
     
  
   
     
   
    
 
  