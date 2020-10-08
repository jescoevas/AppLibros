import React from 'react'
import { BookCard } from './BookCard'

export const BookCardList = ({books}) => {
    return (
        <div className="col s12 m7 animate__animated animate__fadeIn">
            {books.map(book => <BookCard key={book.id} book={book}/>)}
        </div>
    )
}