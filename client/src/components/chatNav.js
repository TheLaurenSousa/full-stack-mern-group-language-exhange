import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import '../App.css';
import logoutProcess from './users/logout';


const ChatNav = () => {
    const navigate = useNavigate();
    const [ socket ] = useState(() => io(':8000'));
    const username = localStorage.getItem('username');

    const logout = e => {
        logoutProcess()
            .then(res => {
                exitChat();
                localStorage.clear();
            })
            .catch(err => console.log(err));
        navigate('/')
    }

    const onHomeClick = e => {
        exitChat();
        navigate('/home')
    }

    const createChat = (e) => {
        exitChat();
        navigate('/chat/new')
    }

    const exitChat = () => {
        socket.emit("new_message", {msg: `${username} has left the chat`, name: "Server"});
        socket.emit("user_left", {msg: username});
    }

    return (
        <div className='nav'>
            <button onClick={onHomeClick}>Home</button>
            <button onClick={createChat}>Create Chat</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default ChatNav;