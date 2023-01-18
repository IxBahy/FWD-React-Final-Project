import "./css/App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from './API/BooksAPI'
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Search";
import { Error } from "./Pages/Error";
import { Routes, Route } from 'react-router-dom'

// declaring static va
function App() {
  const shelfs = [
    { title: 'currently reading', type: 'currentlyReading' },
    { title: 'want to read', type: 'wantToRead' },
    { title: 'read', type: 'read' }
  ]
  //declaring all the states
  const [loading, setLoading] = useState(true);
  const [booksAPI, setBooksAPI] = useState([]);
  //functions
  const handleShelfChange = (book, shelfType) => {
    book.shelf = shelfType
    BooksAPI.update(book.id, shelfType).then(() => {
      setBooksAPI([...booksAPI.filter((b) => b.id !== book.id), book])
    })
    // setLoading(true)
  }
  useEffect(() => {
    //handling the API call to get all the books
    const fetchBooks = async () => {
      const res = await BooksAPI.getAll()
      setBooksAPI(res)
    }
    fetchBooks()
    setLoading(false)
  }, [loading]);

  return (
    loading ? (<h2 style={{ textAlign: 'center' }}> Loading</h2>) :
      (
        <>
          <Routes>
            <Route exact path="/" element={<Home handleShelfChange={handleShelfChange} books={booksAPI} shelfs={shelfs} />} />
            <Route exact path="/search" element={<Search shelfBooks={booksAPI} handleShelfChange={handleShelfChange} />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </>
      )
  )
}

export default App;
