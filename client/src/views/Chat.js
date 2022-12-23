import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import ChatInfo from '../components/chatInfo';
import ChatNav from '../components/chatNav';
import createMessage from '../components/messages/createMessage';

export default () => {
    const username = localStorage.getItem('username');
    const chatId = useParams().id;

    // When user enters the chat, sends server message and stores chatId in localStorage
    useEffect(() => {
        localStorage.setItem('chatId', chatId);
        if (username && chatId) {
            createMessage({username: "Server", chatId: chatId, message: `${username} has entered the chat`})
        }
    }, []);

    return (
        <div>
            <ChatNav chatId={chatId}/>
            <div className='chatPage'>
                <div className='chat'>
                    <ChatField chatId={chatId}/>
                    <ChatInput/>
                </div>
                <div className='chatInfo'>
                    <ChatInfo chatId={chatId}/>
                </div>
            </div>
        </div>
    )
}