import React from 'react'
import { NavBar } from "../components/NavBar";
import { BookShelf } from "./BookShelf";

export const Home = ({ books, handleShelfChange, shelfs }) => {
    return (
        <>
            <NavBar />
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        {shelfs.map((shelf, index) => {
                            return <BookShelf key={index} shelfName={shelf.title} shelfType={shelf.type} books={books} handleShelfChange={handleShelfChange} />
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
