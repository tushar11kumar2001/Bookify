import React from "react";
import { useRef } from "react";
import { useFirebase } from "../context/Firebase";
const Register = () => {
  const firebase = useFirebase();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSumbit = (e) => {
    e.preventDefault();
    firebase
      .signupUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((data) => {
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input 
        ref={emailRef}
        type="text" 
        placeholder="email" />
        <input 
        ref={passwordRef}
        type="text" 
        placeholder="password" />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Register;
