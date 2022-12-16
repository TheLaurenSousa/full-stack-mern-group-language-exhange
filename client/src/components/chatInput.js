import React, { useState } from 'react';
import '../App.css';

const ChatInput = (props) => {
    const username = localStorage.getItem('username');
    const socket = props.socket;
    const [ message, setMessage ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (message && username) {
            socket.emit("new_message", {msg: message, name: username});
        }
        setMessage('');
    };

    return (
        <form onSubmit={onSubmitHandler} className='chatForm'>
            <textarea id="msg" autoComplete="off" rows="2" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button>Send</button>
        </form>
    );
}

export default ChatInput;