import React, { useRef } from 'react';

import { useFirebase } from '../context/Firebase';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firebase = useFirebase();
    const handleLogin = (e)=>{
         e.preventDefault();
         firebase.loginUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
         .then((data)=>{
            alert("Your logged in")
            console.log("login",data);
         })
         .catch((e)=>{
            console.log(e);
         })
    }
    const handleGoogle = ()=>{
        console.log(firebase);
        firebase.loginWithGoogle()
        .then((data)=>{
             console.log(data);
        })
        .catch((e)=>{
             console.log(e);
        })
    }
  return (
  <div>
       <div>
      <form onSubmit={handleLogin}>
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
      <button onClick={handleGoogle}>google</button>
    </div>
  </div>
  )
}

export default Login
