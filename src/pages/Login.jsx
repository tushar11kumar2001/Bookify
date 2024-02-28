import React, { useRef } from 'react';

import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firebase = useFirebase();
    const navigate = useNavigate();
    const handleLogin = (e)=>{
         e.preventDefault();
         firebase.loginUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
         .then((data)=>{
         })
         .catch((e)=>{
            console.log(e);
         })
    }
    const handleGoogle = ()=>{
       
        firebase.loginWithGoogle()
        .then((data)=>{
            
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

    <h1 onClick={()=>{
        navigate("/register")
    }}>sign up</h1>
  </div>
  )
}

export default Login
