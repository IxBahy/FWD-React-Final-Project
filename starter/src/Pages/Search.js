import React from 'react'
import * as BooksAPI from '../API/BooksAPI'
import { useState } from "react";
import { Book } from '../components/Book'
import { SearchBar } from '../components/SearchBar';

export const Search = () => {

    const [books, setBooks] = useState([]);

    const handleSearchChange = (e) => {
        let query = e.target.value
        if (query) {
            const res = BooksAPI.search(query)
            res.then((books) => {
                setBooks(books)
            }
            )

        } else {
            setBooks([])

        }

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
                                books && books.length > 0 ?
                                    books.filter((book) => Object.keys(book).includes('imageLinks'))
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
