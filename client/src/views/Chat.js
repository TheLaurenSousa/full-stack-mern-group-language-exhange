import React, { useState, useEffect } from 'react';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';

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
            <div className='chat'>
                <ChatField name="Temp" messages={messages}/>
                <ChatInput name="Temp" socket={socket}/>
            </div>
        </div>
    )
}