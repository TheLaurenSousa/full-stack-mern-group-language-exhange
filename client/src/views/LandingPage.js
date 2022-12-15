import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>Welcome to the Chat app!</h1>
            <p>Login or register to access our public chat form</p>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
        </div>
    )
}