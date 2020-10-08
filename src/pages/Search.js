import React, { Component } from 'react';
import { SearchForm } from '../components/SearchForm'
import { BookList } from '../components/BookList' 

export class Search extends Component {

    constructor(){
        super()
        this.state = {
            books : []
        }
    }

    setResults = (search) => {
        if(search === ''){
            this.setState({books : []})
        }else{
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books`)
            .then(data => data.json())
            .then(data => {
                this.setState({books : data['items']})
            })
        }
    }

    render() {
        const {books} = this.state
        return (
        <div>
            <div className="row">
                <SearchForm className="col s12" results={this.setResults}/>
            </div>
            <BookList books={books}/>
        </div>
        );
    }
}
