import React from 'react'
import { Book } from './Book'

export const BookList = ({books}) => {
    return (
        <div className="col s12 m7">
            {books.map(book => <Book key={book.id} book={book}/>)}
        </div>
    )
}