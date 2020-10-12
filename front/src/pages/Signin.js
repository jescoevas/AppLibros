import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class SignIn extends Component {
  render() {
    return (
        <div style={{marginTop:'20px'}} className="animate__animated animate__fadeInRight animate__fast">
            <div>
                <p>You do not own an user account? Sign up <Link to={'/signup'}>here</Link></p>
                <h3>Sign in</h3>
                <hr/>
                <form className="row">
                    <div className="col s6 input-field">
                        <input id="user" type="text" className="validate" autoComplete="off"/>
                        <label htmlFor="user">User</label>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}
