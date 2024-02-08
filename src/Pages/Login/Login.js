import { useState } from "react";
import React from 'react'
import { FaUser,FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3001/api/login', {
            username,
            password,
          });
      
          if (response.data.success) {
            console.log('Login successful');
            navigate('/TestHome')
          } else {
            console.error('Login failed:', response.data.message);
          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      };

    const handleRegisterClick = () => {
        console.log('Redirect to registration page');
        navigate('/Register')
    };

    const handleForgotPasswordClick = () => {
        console.log('Redirect to forgot password page');
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    {/* <a href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a> */}
                </div>
                <div className="LoginButton">
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
                <div className="register-link">
                    <label>Don't Have an account?<a href="/Register" onClick={handleRegisterClick}>Register</a></label>
                </div>
            </form>
        </div>

    );
};

export default Login
