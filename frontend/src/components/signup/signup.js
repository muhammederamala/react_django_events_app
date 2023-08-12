import React, { Component } from 'react';
import './signup.css';
import Login from '../login/login';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      signedUp: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const { username, email, password } = this.state;

    // Send the registration data to Django backend
    try {
      const csrfToken = this.getCookie('csrftoken');
      const response = await fetch('http://localhost:8000/api/signup_view/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Successful registration logic
        console.log('Registration successful');
        this.setState({ signedUp: true });
      } else {
        // Handle unsuccessful registration
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

  render() {

    const { signedUp } = this.state;

    if (signedUp) {
      return <Login />;
    }

    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2>Create an Account</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
