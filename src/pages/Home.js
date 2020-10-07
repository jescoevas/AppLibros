import React, {Component} from 'react'
import {BookList} from '../components/BookList'

//const apikey = 'AIzaSyCU5ckIEkSxm_C16HMZNzywYKppiwNBOT0'

export class Home extends Component{

    constructor(){
        super()
        this.state = {books : []}
    }

    componentDidMount(){
        fetch(`https://www.googleapis.com/books/v1/volumes?q=a&printType=books`)
        .then(data => data.json())
        .then(data => {
            console.log(data['items'])
            this.setState({books : data['items']})
        })
    }

    render(){
        const {books} = this.state
        return (
            <BookList books={books}/>
        )
    }
}