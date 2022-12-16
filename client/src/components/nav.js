import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import logoutProcess from './users/logout';

const Nav = () => {
    const [ socket ] = useState(() => io(':8000'));
    const navigate = useNavigate();
    const username = localStorage.getItem('username');


    const logout = e => {
        logoutProcess()
            .then(res => {
                socket.emit("new_message", {msg: `${username} has left the chat`, name: "Server"});
                socket.emit("user_left", {msg: username});
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