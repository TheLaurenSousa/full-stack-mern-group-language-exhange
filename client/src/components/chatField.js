import React from 'react';
import '../App.css';

const ChatField = (props) => {
    const name = props.name;
    const messages = props.messages;

    return (
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
    );
}

export default ChatField;