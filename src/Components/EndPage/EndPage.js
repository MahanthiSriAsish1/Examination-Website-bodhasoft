import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Endpage.css"

const EndPage = () => {
    const message = 'Thank you for completing the test, You Can Close This Window';
    return (
        <div className='EndPage-wrapper'>
            <Navbar />
            <div className='EndMessage'>
                <h2>Test Completed</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default EndPage
