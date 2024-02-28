import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useEffect, useState } from 'react'

const BookCard = ({book}) => {
    const firebase = useFirebase();
    const [photoURL, setPhotoURL] = useState(null);
    useEffect(()=>{
        firebase.getImageURL(book.data().imageURL).then((result) => {
            setPhotoURL(result);
        }).catch((err) => {
            
        });
    },[])
    
  return (
 
                 <div>
                <img src={photoURL}/>
                <h1>{book.data().name}</h1>
                <h1>{book.data().price}</h1>
                <h1>{book.data().isbn}</h1>
                <hr/>
            </div>

  )
}

export default BookCard
