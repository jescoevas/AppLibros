import React, {Component} from 'react'

export class Navbar extends Component{
    render(){
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul id="nav-mobile" className="left">
                        <li><a href="sass.html">Sass</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}