import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const Chat = (props) => {
    const name = props.name;
    const [ socket ] = useState(() => io(':8000'))
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        socket.on("new_message", data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages];
            })
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (message && name) {
            socket.emit("new_message", {msg: message, name: name});
        }
    };

    return (
        <div>
            <h2>Chat</h2>
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
        </div>
    );
}

export default Chat;