import React from 'react'


export const BookChanger = ({ book, handleShelfChange }) => {


    return (
        <>
            <div className="book-shelf-changer">
                {/* celect to choose the self you want the book to be at  */}
                <select onChange={(e) => handleShelfChange(book.id, e.target.value)} defaultValue={book.shelf}>
                    <option disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading" >
                        Currently Reading
                    </option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    {book.shelf ? <option value="none">None</option> : ''}

                </select>
            </div>
        </>
    )
}
