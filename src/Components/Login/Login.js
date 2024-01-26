import { useState } from "react";
import React from 'react'
import { FaUser,FaLock } from "react-icons/fa";
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // You can send the data to your authentication API or perform other actions
    };

    const handleRegisterClick = () => {
        // Add logic to navigate to the registration page or display a registration form
        console.log('Redirect to registration page');
    };

    const handleForgotPasswordClick = () => {
        // Add logic to navigate to the forgot password page or display a forgot password form
        console.log('Redirect to forgot password page');
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" value={username} placeholder="username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" value={password} placeholder="password" required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="LoginButton">
                    <button type="submit">Login</button>
                </div>
                <div className="register-link">
                    <label>Don't Have an account?<a href="/Register">Register</a></label>
                </div>
            </form>
        </div>

    );
};

export default Login
