import React, {Component} from 'react'
import M from '../../node_modules/materialize-css/dist/js/materialize.min.js'

export class Navbar extends Component{

    componentDidMount(){
        this.iniciarListeners()
    }

    iniciarListeners(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    }

    render(){
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <a href="#" className="brand-logo right">Logo</a>
                        <ul id="nav-mobile" className="left">
                            <li>
                                <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav teal lighten-2">
                    <li><div className="user-view">
                    <div className="background">
                        <img src="images/office.jpg"/>
                    </div>
                    <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        )
    }
}