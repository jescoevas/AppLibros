import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js'

export class Navbar extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.iniciarListeners()
    }

    iniciarListeners(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    logout = () => {
        this.props.logout()
    }

    menuButton(){
        return {
            position:'fixed',
            bottom:'10%',
            right:'10%'
        }
    }

    render(){
        const {isLogged} = this.props
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <NavLink to={'/'} className="brand-logo right">AppBooks</NavLink>
                        <ul id="nav-mobile" className="left">
                            <li>
                                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>{this.props.children}</div>
                <ul id="slide-out" className="sidenav teal lighten-2">
                    <div className="background">
                        <img src="https://tutorialesenlinea.es/uploads/posts/2019-04/1555584802_como-descargar-libros-de-google_tutoriales-en-linea.jpg" height="200px"/>
                    </div>
                    <li><NavLink to={'/search'} className="waves-effect">Search</NavLink></li>
                    <li>
                        {
                            isLogged ? 
                            <a to={'/'} className="waves-effect" onClick={this.logout}>Logout</a> :
                            <NavLink to={'/signin'} className="waves-effect">Sign in</NavLink>
                        }
                    </li>
                </ul>
                <button style={this.menuButton()} data-target="slide-out" className="waves-effect waves-light btn btn-floating sidenav-trigger" ><i className="material-icons">menu</i></button>
            </div>
        )
    }
}