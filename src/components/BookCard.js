import React from 'react';
import methods from '../assets/Methods.js'
import { Link } from "react-router-dom";

export const BookCard = ({book}) => {
    const {authors} = book.volumeInfo
    return <div className="card horizontal">
                <div className="card-image">
                    <img src={
                        book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
                    } 
                    alt={book.volumeInfo.title}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>Author(s): 
                            {methods.toArray(authors).map(author => <span key={author}>{author},</span>)}
                        </p>
                        <p>Nº pages: {book.volumeInfo.pageCount || 'Undetermined'}</p>
                        <p>Published date: {book.volumeInfo.publishedDate || 'Undetermined'}</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/book/${book.id}/${book.volumeInfo.title}`}>{book.volumeInfo.title}</Link>
                    </div>
                </div>
            </div>
}
