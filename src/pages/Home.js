import React, {Component} from 'react'
import { BookCardList } from '../components/BookCardList'
import { Loader } from "../components/Loader";
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js'

//const apikey = 'AIzaSyCU5ckIEkSxm_C16HMZNzywYKppiwNBOT0'
const abc = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')


export class Home extends Component{

    constructor(){
        super()
        this.state = {books : [], loaded:false}
    }

    componentDidMount(){
        this.loadBooks()
    }

    loadBooks = () => {
        this.setState({loaded:false})
        const char = abc[Math.floor(Math.random() * abc.length-1)]
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${char}&printType=books`)
        .then(data => data.json())
        .then(data => {
            this.setState({books : data['items'], loaded:true})
        })
    }

    render(){
        const {books, loaded} = this.state

        return (
            <div style={{marginTop:'5px'}} className="animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col s12">
                        <button onClick={this.loadBooks} className="btn waves-effect waves-light col s12" type="submit" name="action">Refresh
                            <i className="material-icons right">refresh</i>
                        </button>
                    </div>
                </div>
                {loaded ? <BookCardList books={books}/> : <Loader/>}
            </div>
        )
    }
    
}