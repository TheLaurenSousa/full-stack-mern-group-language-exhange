import React, { useState } from 'react';
import '../App.css';
import createMessage from '../components/messages/createMessage';

const ChatInput = () => {
    const username = localStorage.getItem('username');
    const chatId = localStorage.getItem('chatId');
    const [ message, setMessage ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (message && username) {
            createMessage({username, chatId, message})
        }
        setMessage('');
    };

    return (
        <div>
            <hr/>
            <form onSubmit={onSubmitHandler} className='chatForm'>
                <textarea id="msg" autoComplete="off" rows="2" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default ChatInput;