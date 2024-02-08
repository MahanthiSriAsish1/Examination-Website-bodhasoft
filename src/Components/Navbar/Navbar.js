import React, { useState } from 'react';
import './Navbar.css';
import bodhasoftLogo from '../../Assets/BodhaSoft_logo_purple-removebg.png';
import Timer from '../Timer/Timer';

const Navbar = ({ duration, ShowTimer, TestName }) => {
  const [showTimer, setShowTimer] = useState(ShowTimer);
  return (
    <div className="wrapper-navbar">
      <div className="navbar-logo">
        <img src={bodhasoftLogo} alt="bodahsoft-logo" className="bodhasoft-logo" />
      </div>

      {TestName && (
        <div className='test-name'>
          <span className="user-text">{TestName}</span>
        </div>
      )}

      <div className="timer-container">
        <label className="timer-label">Time Left:</label>
        {showTimer && <Timer duration={duration}/>}
      </div>
    </div>
  );
};

export default Navbar;
