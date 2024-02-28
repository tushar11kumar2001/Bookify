import { createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZZbl-ED3_ThToDfwSGGwtRwtPNFWDN1c",
  authDomain: "bookify-6b843.firebaseapp.com",
  projectId: "bookify-6b843",
  storageBucket: "bookify-6b843.appspot.com",
  messagingSenderId: "464733109330",
  appId: "1:464733109330:web:b578f8ca112e0da101f38b",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);
const googleProvider = new GoogleAuthProvider();


//firestore
const firestore = getFirestore(app);
const storage = getStorage(app);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const loginUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signout = () => signOut(auth);
  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  const handleCreateNewListing = async (name, isbn, price, cover) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    return await addDoc(collection(firestore, 'books'), {
        name,
        isbn,
        price,
        imageURL: uploadResult.ref.fullPath,
      })
  };

  //get data from firestore
  const getBookList = ()=>{
   return getDocs(collection(firestore,'books'))
  }

  //get image from storage
  const getImageURL = (path)=>{
    return getDownloadURL(ref(storage,path));
  }
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        loginWithGoogle,
        signout,
        handleCreateNewListing,
        getBookList,
        getImageURL,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
