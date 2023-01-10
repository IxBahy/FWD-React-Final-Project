import "./css/App.css";
import { useEffect, useState } from "react";
import { BookShelf } from "./Pages/BookShelf";
import { NavBar } from "./components/NavBar";
import * as BooksAPI from './API/BooksAPI'

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
  const handleShelfChange = (id, shelfType) => {
    BooksAPI.update(id, shelfType)
    setLoading(true)
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
          <NavBar />
          <div className="list-books">
            <div className="list-books-content">
              <div>
                {shelfs.map((shelf, index) => {
                  return <BookShelf key={index} shelfName={shelf.title} shelfType={shelf.type} books={booksAPI} handleShelfChange={handleShelfChange} />
                })}

              </div>
            </div>
          </div>
        </>
      )
  )
}

export default App;
