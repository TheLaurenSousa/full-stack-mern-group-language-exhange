import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logoutProcess from './users/logout';

const Nav = () => {
    const navigate = useNavigate();

    const logout = e => {
        logoutProcess()
            .then(res => {
                localStorage.clear();
            })
            .catch(err => console.log(err));
        navigate('/')
    }

    const onHomeClick = e => {
        navigate('/home')
    }

    const createChat = (e) => {
        navigate('/chat/new')
    }

    return (
        <div className='nav'>
            <button onClick={onHomeClick}>Home</button>
            <button onClick={createChat}>Create Chat</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Nav;