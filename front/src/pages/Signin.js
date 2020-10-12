import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Title } from "../components/Title";
import axios from 'axios'

export class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            user:'',
            password:'',
            success:false
        }
    }

    componentDidMount() {
        this.setWrongPassword('none')
        this.setUserDoesNotExist('none')
      }

    setWrongPassword = (option) => document.getElementById("wrongPassword").style.display = option
    setUserDoesNotExist = (option) => document.getElementById("userDoesNotExist").style.display = option

    changeInput = e => this.setState({[e.target.name]:e.target.value})

    submit = async(e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4200/signin', this.state)
        const msg = res['data'].msg
        if(msg == 'Wrong user'){
            this.setUserDoesNotExist('block')
            this.setWrongPassword('none')
        }else if(msg == 'Wrong password'){
            this.setWrongPassword('block')
            this.setUserDoesNotExist('none')
        }else{
            this.setWrongPassword('none')
            this.setUserDoesNotExist('none')
            localStorage.setItem('_id', res['data'].userDB._id)
            this.setState({success:true})
        }
    }

    render() {
        return (
            <div>
                {!this.state.success ? 
                <div style={{marginTop:'20px'}} className="animate__animated animate__fadeInRight animate__fast">
                    <p>You do not own an user account? Sign up <Link to={'/signup'}>here</Link></p>
                    <Title>Sign in</Title>
                    <hr/>
                    <form onSubmit={this.submit} className="row">
                        <div className="col s12 input-field">
                            <input 
                            id="user" 
                            type="text" 
                            className="validate" 
                            autoComplete="off"
                            name="user"
                            value={this.state.user}
                            onChange={this.changeInput}
                            required/>
                            <label htmlFor="user">User</label>
                            <small id="userDoesNotExist" style={{color:'red'}}>User does not exist</small>
                        </div>
                        <div className="col s12 input-field">
                            <input 
                            id="password" 
                            type="password" 
                            className="validate" 
                            autoComplete="off"
                            name="password"
                            value={this.state.password}
                            onChange={this.changeInput}
                            required/>
                            <label htmlFor="password">Password</label>
                            <small id="wrongPassword" style={{color:'red'}}>Wrong password</small>
                        </div>
                        <div className="col s12">
                            <button type="submit" className="waves-effect waves-light btn" style={{width:'100%'}}>Sign in</button>
                        </div>
                    </form>
            </div> : <Redirect to={'/'}/>}
            </div>
        );
    }
}
