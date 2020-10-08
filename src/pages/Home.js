import React, {Component} from 'react'
import { BookList } from '../components/BookList'
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js'

//const apikey = 'AIzaSyCU5ckIEkSxm_C16HMZNzywYKppiwNBOT0'
const abc = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')


export class Home extends Component{

    constructor(){
        super()
        this.state = {books : []}
    }

    componentDidMount(){
        const char = abc[Math.floor(Math.random() * abc.length-1)]
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${char}&printType=books`)
        .then(data => data.json())
        .then(data => {
            this.setState({books : data['items']})
        })
        this.iniciarListeners()
    }

    iniciarListeners(){
        
    }

    render(){
        const {books} = this.state

        return (
            <div>
                <BookList books={books}/>
            </div>
            
        )
    }
    
}