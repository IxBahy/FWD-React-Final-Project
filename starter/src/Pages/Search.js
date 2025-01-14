import React from 'react'
import * as BooksAPI from '../API/BooksAPI'
import { useState, useEffect } from "react";
import { Book } from '../components/Book'
import { SearchBar } from '../components/SearchBar';

export const Search = ({ shelfBooks, handleShelfChange }) => {
    const [searchBooks, setSearchBooks] = useState([]);
    const [query, setQuery] = useState('');



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
            const res = BooksAPI.search(query)
            console.log('res', res);
            res.then((books) => {
                console.log('all books', books.error);
                if (books.error === 'empty query') {

                } else {
                    books.forEach((searchBook) => {
                        combareBookId(searchBook, shelfBooks)
                    })
                    setSearchBooks(books)
                }


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
