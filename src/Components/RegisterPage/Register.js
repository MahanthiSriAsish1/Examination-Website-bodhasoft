import React, { useState } from 'react'
import './Register.css'
import { FaUser,FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Register = () => {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[Repeatpassword,setRepeatPassword] = useState('')

    const passwordsmatch = password === Repeatpassword;

    return (
        <div className='register-wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="email" required />
                    <IoIosMail  className="mail-icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password" required />
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="repeat-password" required />
                    <FaLock className="icon" />
                </div>
                <div className="RegisterButton">
                    <button disabled={!passwordsmatch} type="submit">Register</button>
                </div>
                <div className="register-link">
                    <label>Already have an account?<a href="/Logi">Login</a></label>
                </div>
            </form>
        </div>
    )
}

export default Register
