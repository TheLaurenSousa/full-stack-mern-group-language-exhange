import React from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Nav = (props) => {
    const navigate = useNavigate();

    const logout = e => {
        axois.get('http://localhost:8000/logout')
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Nav;