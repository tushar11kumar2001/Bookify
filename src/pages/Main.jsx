import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom';
import Books from '../components/Books';
const Main = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
  return (
    <>
    <div>
      <h1 onClick={()=>navigate("/book/list")}>ADD LISTING</h1>
      <button
      onClick={()=>{
        firebase.signout().then(()=>{console.log("successfully signout");})
      }}
      >
        signout</button>
    </div>
    <Books/>
    </>
  )
}

export default Main
