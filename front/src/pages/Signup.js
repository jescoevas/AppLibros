import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Title } from "../components/Title";
import axios from 'axios'

const INITIAL_STATE = {
  user:'',
  password:'',
  confirmPassword:'',
  nickname:'',
  success:false
}

export class SignUp extends Component {
  constructor(){
    super()
    this.state = INITIAL_STATE
  }

  componentDidMount() {
    this.setPasswordsDoNotMatch('none')
    this.setUserAlreadyExists('none')
    this.setNicknameAlreadyExists('none')
  }

  setPasswordsDoNotMatch = (option) => document.getElementById("passwordsDoNotMatch").style.display = option
  setUserAlreadyExists = (option) => document.getElementById("userAlreadyExists").style.display = option
  setNicknameAlreadyExists = (option) => document.getElementById("nicknameAlreadyExists").style.display = option

  changeInput = e => this.setState({[e.target.name] : e.target.value})

  submit = async (e) => {
    e.preventDefault()
    const {password, confirmPassword} = this.state
    let match = password === confirmPassword
    if(match){
      this.setPasswordsDoNotMatch('none')
      const res = await axios.post('http://localhost:4200/signup', this.state)
      const msg = res['data'].msg
      if(msg == 'Nickname exists'){
        this.setNicknameAlreadyExists('block')
        this.setUserAlreadyExists('none')
      }else if(msg == 'User exists'){
        this.setUserAlreadyExists('block')
        this.setNicknameAlreadyExists('none')
      }else{
        this.setUserAlreadyExists('none')
        this.setNicknameAlreadyExists('none')
        this.setState({success:true})
      }
    }else{
      this.setPasswordsDoNotMatch('block')
      this.setNicknameAlreadyExists('none')
      this.setUserAlreadyExists('none')
    }
  }

  render() {
    const {success} = this.state
    return (
        <div>
          {!success ? <div style={{marginTop:'20px'}} className="animate__animated animate__fadeInRight animate__fast">
          <div>
              <p>You already own an user account? Sign in <Link to={'/signin'}>here</Link></p>
              <Title>Sign up</Title>
              <hr/>
              <form id="form" onSubmit={this.submit}>
                <div className="row">
                    <div className="col s6 input-field">
                        <input id="user"
                        type="text" 
                        className="validate" 
                        autoComplete="off"
                        name="user"
                        value={this.state.user}
                        onChange={e => this.changeInput(e)}
                        required/>
                        <label htmlFor="user">User</label>
                        <small id="userAlreadyExists" style={{color:'red'}}>User already exists</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 input-field">
                        <input 
                        id="password" 
                        type="password" 
                        className="validate" 
                        autoComplete="off"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.changeInput(e)}
                        required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col s6 input-field">
                        <input 
                        id="confirmPassword" 
                        type="password" 
                        className="validate" 
                        autoComplete="off"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={e => this.changeInput(e)}
                        required/>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <small id="passwordsDoNotMatch" style={{color:'red'}}>Passwords do not match</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 input-field">
                        <input 
                        id="nickname" 
                        type="text" 
                        className="validate" 
                        autoComplete="off"
                        name="nickname"
                        value={this.state.nickname}
                        onChange={e => this.changeInput(e)}
                        required/>
                        <label htmlFor="nickname">Nickname</label>
                        <small id="nicknameAlreadyExists" style={{color:'red'}}>Nickname already exists</small>
                    </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button type="submit" className="waves-effect waves-light btn" style={{width:'100%'}}>Sign up</button>
                  </div>
                </div>
              </form>
          </div>
        </div> : <Redirect to={'/signin'}/>}
        </div>
    );
  }
}
