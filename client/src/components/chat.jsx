import React, { useState } from 'react';
import '../App.css';

const Chat = (props) => {
    const name = props.name;
    const messages = props.messages;
    const socket = props.socket;
    const [ message, setMessage ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (message && name) {
            socket.emit("new_message", {msg: message, name: name});
        }
    };

// Split Messages and Message field into separate components


    return (
        <div className='chat'>
            <div className='chatLog'>
                {messages.map((msg, i) => {
                    if (msg.name === name){
                        return (
                            <div key={i} className="userMessage">
                                <p id='userName'>{msg.name} said:</p>
                                <p id='userMessage'>{msg.msg}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div key={i} className="otherMessage">
                                <p id='userName'>{msg.name} said:</p>
                                <p id='userMessage'>{msg.msg}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <form onSubmit={onSubmitHandler} className='chatForm'>
                <textarea id="msg" autoComplete="off" rows="2" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Chat;