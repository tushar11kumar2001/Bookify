import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
const List = () => {
    const firebase = useFirebase();
  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");
 
//   console.log("coverpic",coverPic);
  const handleSubmit = (e)=>{
    e.preventDefault();
    firebase.handleCreateNewListing(name,isbnNumber,price,coverPic)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter book name"
        />
        <input
        value={isbnNumber}
          onChange={(e) => setIsbnNumber(e.target.value)}
          type="text"
          placeholder="set ISBN number"
        />
        <input
        value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="set price"
        />
        <input
          onChange={(e) => setCoverPic(e.target.files[0])}
          type="file"
        
        
        />
        <button>create</button>
      </form>
    </div>
  );
};

export default List;
