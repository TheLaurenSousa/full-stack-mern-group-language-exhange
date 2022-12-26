import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>Welcome to The Group Language Exchange!</h1>
            <p>Chat with people around the world who are learning another language</p>
            <p>The GLE is designed to help you connect with language learners and improve your skills through immersive conversation</p>
            <Link to={'/login'}>
                <button>Join the Conversation</button>
            </Link>
        </div>
    )
}