import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZZbl-ED3_ThToDfwSGGwtRwtPNFWDN1c",
  authDomain: "bookify-6b843.firebaseapp.com",
  projectId: "bookify-6b843",
  storageBucket: "bookify-6b843.appspot.com",
  messagingSenderId: "464733109330",
  appId: "1:464733109330:web:b578f8ca112e0da101f38b",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const loginUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

const googleProvider = new GoogleAuthProvider();
const loginWithGoogle = ()=> signInWithPopup(auth, googleProvider) 
export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider
      value={
        {
            signupUserWithEmailAndPassword, 
            loginUserWithEmailAndPassword,
            loginWithGoogle
        }
    }
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
