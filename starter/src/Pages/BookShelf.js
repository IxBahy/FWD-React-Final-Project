import React from 'react'
import { Book } from '../components/Book'
import { ShelfTitle } from '../components/ShelfTitle'
import { Link } from 'react-router-dom'

export const BookShelf = ({ shelfName, shelfType, books, handleShelfChange }) => {
    return (
        <>
            <div className="bookshelf">
                <ShelfTitle title={shelfName} />
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.filter((book) => book.shelf === shelfType)
                                .map((book, index) => {
                                    return <Book key={index} book={book} handleShelfChange={handleShelfChange} />
                                })

                        }
                    </ol>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'></Link>
            </div>
        </>
    )
}
