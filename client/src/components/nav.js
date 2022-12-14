import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logoutProcess from './users/logout';

const Nav = () => {
    const logout = e => {
        logoutProcess()
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='nav'>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/'}>
                <button onClick={logout}>Logout</button>
            </Link>
        </div>
    );
}

export default Nav;