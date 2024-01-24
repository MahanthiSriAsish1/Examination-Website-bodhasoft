import React from 'react'
import { useState } from 'react';

const TestHome = () => {
    const [Heading, setHeading] = useState('Instructions');
    const [username, setUsername] = useState('Johndoe');
    const [instructions, setinstructions] = useState('Please dont copy in the examination');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div>
            <div>
                <div>Hello {username}</div>
                <div>Welcome to Bodhasoft Test</div>
                <div>
                    <div>Test Duration</div>
                    <div>No. of questions</div>
                </div>
                <div>
                    <div>45</div>
                    <div>30</div>
                </div>
            </div>
            <div>
                <h2>{Heading}</h2>
                <div>{instructions}</div>
                <button>Continue</button>
            </div>
        </div>
    )
}

export default TestHome
