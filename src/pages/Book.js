import React, { Component } from 'react';
import { Loader } from '../components/Loader'
import methods from "../assets/Methods";

export class Book extends Component {

    constructor(){
        super()
        this.state = {
            book : {},
            loaded:false
        }
    }

    componentDidMount(){
        this.loadBook()
    }

    loadBook = () => {
        let {id} = this.props.match.params
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(book => book.json())
        .then(book => {
            console.log(book)
            this.setState({book, loaded:true})
        })
    }

    imageStyle(){
        return {float:'left', marginRight:'5px'}
    }

    render() {
        const {book, loaded} = this.state

        return (
            <div>
                {
                    !loaded ? <Loader/>  : 
                    <div className="animate__animated animate__fadeIn">
                        <div style={{marginTop:'20px'}}>
                            <img style={this.imageStyle()} src={
                                book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
                            } alt={book.volumeInfo.title}/>
                            <div>
                                <h5>{book.volumeInfo.title} ({book.volumeInfo.publisher}) <a target="_blank" href={book.volumeInfo.previewLink}><i className="material-icons prefix">bookmark</i></a><a target="_blank" href={book.saleInfo.buyLink}><i className="material-icons prefix">shop</i></a></h5>
                                <hr/>
                                <p id="description">{methods.removeHtml(book.volumeInfo.description)}</p>
                            </div>
                        </div>
                        <hr/>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Author(s):</td>
                                    <td>{methods.toArray(book.volumeInfo.authors).map(author => <span key={author}>{author},</span>)}</td>
                                </tr>
                                <tr>
                                    <td>Categories:</td>
                                    <td>{methods.toArray(book.volumeInfo.categories).map(author => <span key={author}>{author},</span>)}</td>
                                </tr>
                                <tr>
                                    <td>Pages:</td>
                                    <td>{book.volumeInfo.pageCount}</td>
                                </tr>
                                <tr>
                                    <td>Pages:</td>
                                    <td>{book.volumeInfo.publishedDate}</td>
                                </tr>
                                <tr>
                                    <td>Language:</td>
                                    <td>{book.volumeInfo.language}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        )

    }
}
