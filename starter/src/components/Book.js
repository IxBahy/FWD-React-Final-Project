import React from 'react'
import { BookChanger } from './BookChanger'

export const Book = ({ book, handleShelfChange }) => {

    return (
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${book.imageLinks.thumbnail})`,
                            }}
                        >
                        </div>
                        <BookChanger book={book} handleShelfChange={handleShelfChange} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>

        </>
    )
}
