import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import ChatInfo from '../components/chatInfo';
import ChatUsers from '../components/chatUsers';
import ChatNav from '../components/chatNav';

export default () => {
    const [ socket ] = useState(() => io(':8000'));
    const username = localStorage.getItem('username');
    const chatId = useParams().id;

    // When user enters the chat, notifies other users and stores chatId in localStorage
    useEffect(() => {
        localStorage.setItem('chatId', chatId);
        socket.emit("new_user", {msg: username})
    }, []);

    return (
        <div>
            <ChatNav/>
            <div className='chatPage'>
                <div className='chat'>
                    <ChatField chatId={chatId}/>
                    <ChatInput socket={socket}/>
                </div>
                <div className='chatInfo'>
                    <ChatInfo chatId={chatId}/>
                    <ChatUsers/>
                </div>
            </div>
        </div>
    )
}