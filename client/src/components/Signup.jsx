<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.scss';
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
>>>>>>> 116e269b2ab89fd5279978c766b156962c9e8957

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  getUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  getEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  getPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

<<<<<<< HEAD
    confirmPassword = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    submit_cred= (event) =>{
        var cred={
            u_name: this.state.username,
            u_email: this.state.email,
            u_pass: this.state.password
        }
        console.log(cred);
        axios.post("/api/register",{
            u_name: this.state.username,
            u_email: this.state.email,
            u_pass: this.state.password
        })
        .then(res=>{
            console.log(res);
        });

    }

    render() { 
        return ( 
            <div className="login-form">
                <form>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
=======
  confirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value
    });
  };
  render() {
    return (
      <div className="login-form">
        <form>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>
>>>>>>> 116e269b2ab89fd5279978c766b156962c9e8957

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                required="required"
                value={this.state.username}
                onChange={this.getUsername}
              ></input>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required="required"
                value={this.state.email}
                onChange={this.getEmail}
              ></input>
            </div>
          </div>

<<<<<<< HEAD
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" value={this.state.confirmPassword} onChange={this.confirmPassword}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={this.submit_cred} className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <Link to="/login"><a>Login here</a></Link></div>
=======
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                value={this.state.password}
                onChange={this.getPassword}
              ></input>
            </div>
          </div>
>>>>>>> 116e269b2ab89fd5279978c766b156962c9e8957

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
                value={this.state.confirmPassword}
                onChange={this.confirmPassword}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account?{" "}
          <Link to="/login">
            <a>Login here</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
