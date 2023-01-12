import React from 'react'
import * as BooksAPI from '../API/BooksAPI'
import { useState, useEffect } from "react";
import { Book } from '../components/Book'
import { SearchBar } from '../components/SearchBar';

export const Search = () => {
    const [searchBooks, setSearchBooks] = useState([]);
    const [shelfBooks, setshelfBooks] = useState([]);
    const [query, setQuery] = useState('');



    const fetchAllBooks = async () => {
        const allBooks = await BooksAPI.getAll()
        setshelfBooks(allBooks)
    }
    fetchAllBooks()


    useEffect(() => {
        const combareBookId = (searchBook, shelfBooks) => {
            shelfBooks.forEach((book) => {
                if (searchBook.id === book.id) {
                    searchBook.shelf = book.shelf
                    console.log('swap');
                }
            })
        }
        if (query) {
            fetchAllBooks()
            const res = BooksAPI.search(query)
            res.then((books) => {
                console.log(shelfBooks, '  ', res);
                books.forEach((searchBook) => {
                    combareBookId(searchBook, shelfBooks)
                })
                setSearchBooks(books)
            })
        } else {
            setSearchBooks([])
        }
        return () => {

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    const handleSearchChange = (e) => {
        setQuery(e.target.value)
    }

    const handleShelfChange = (id, shelfType) => {
        BooksAPI.update(id, shelfType)
    }
    return (
        <>
            <div className="app">
                <div className="search-books">
                    <SearchBar handleSearchChange={handleSearchChange} />
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                searchBooks && searchBooks.length > 0 ?
                                    searchBooks.filter((book) => Object.keys(book).includes('imageLinks'))
                                        .map((book) => {
                                            return <Book key={book.id} book={book} handleShelfChange={handleShelfChange} />
                                        })
                                    :
                                    <h2>No books matches the search</h2>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
