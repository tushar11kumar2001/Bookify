import React from 'react'
import { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import BookCard from './BookCard';
const Books = () => {
    const firebase = useFirebase();
    const [list,setlist] = useState([]);
   
    useEffect(()=>{
      firebase.getBookList().then((books)=>{ setlist(books.docs) })
      
    },[])
  return (
    <div>
     {  list.map((book)=>{
          return (
            <BookCard book={book}  key={book.id}/>
          )
       })
       }
    </div>
  )
}

export default Books
