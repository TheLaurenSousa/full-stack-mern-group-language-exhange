import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logoutProcess from './users/logout';
import createMessage from './messages/createMessage';


const ChatNav = (props) => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const chatId = props.chatId;

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
        const exitMessage = {username: "Server", chatId: chatId, message: `${username} has left the chat`};
        createMessage(exitMessage);
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