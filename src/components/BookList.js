import React from 'react'

export const BookList = ({books}) => {
    return (
        <div className="col s12 m7">
        {
            books.map(book => {
                return (
                        <div className="card horizontal" key={book.id}>
                            <div className="card-image">
                                <img src={book.volumeInfo.imageLinks.thumbnail}/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    {/* <p>Author(s): {book.volumeInfo.authors.map(author => {
                                        return <span>{author}</span>
                                    })}</p> */}
                                    <p>Nº pages: {book.volumeInfo.pageCount}</p>
                                    <p>Published date: {book.volumeInfo.publishedDate}</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">{book.volumeInfo.title}</a>
                                </div>
                            </div>
                        </div>
                )
            })
        }
        </div>
    )
}