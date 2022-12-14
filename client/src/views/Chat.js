import React, { useState, useEffect } from 'react';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import Nav from '../components/nav';
import { useLocation } from 'react-router-dom';

export default () => {
    const [ socket ] = useState(() => io(':8000'))
    const [ messages, setMessages ] = useState([]);
    const {state} = useLocation();
    const {name} = state;

    useEffect(() => {
            socket.on("new_message", data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages];
            })
        });
    }, []);

    return (
        <div>
            <Nav/>
            <h2>Chat</h2>
            <div className='chat'>
                <ChatField name={name} messages={messages}/>
                <ChatInput name={name} socket={socket}/>
            </div>
        </div>
    )
}