import React from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = (props) => {

    const logout = e => {
        axois.get('http://localhost:8000/logout')
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