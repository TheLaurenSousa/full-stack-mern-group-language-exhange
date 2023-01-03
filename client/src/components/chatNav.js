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

    const onExploreClick = e => {
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
            <h2 onClick={onExploreClick}>Group Language Exchange</h2>
            <ul>
                <li onClick={onExploreClick}>Explore Chats</li>
                <li onClick={createChat}>Create Chat</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    );
}

export default ChatNav;