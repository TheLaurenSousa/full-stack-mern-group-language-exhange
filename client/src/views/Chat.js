import React, { useState, useEffect } from 'react';
import '../App.css';
import io from 'socket.io-client';
import Chat from '../components/chat';

export default () => {
    const [ socket ] = useState(() => io(':8000'))
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        socket.on("new_message", data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages];
            })
        });
    }, []);

    return (
        <div>
            <h2>Chat</h2>
            <Chat name="Temp" messages = {messages} socket= {socket}/>
        </div>
    )
}