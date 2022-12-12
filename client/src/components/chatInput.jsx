import React, { useState } from 'react';
import '../App.css';

const ChatInput = (props) => {
    const name = props.name;
    const socket = props.socket;
    const [ message, setMessage ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (message && name) {
            socket.emit("new_message", {msg: message, name: name});
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