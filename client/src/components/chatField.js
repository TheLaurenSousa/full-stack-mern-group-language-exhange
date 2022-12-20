import React from 'react';
import '../App.css';

const ChatField = (props) => {
    const username = localStorage.getItem('username');
    const messages = props.messages;


    return (
        <div className='chatLog'>
            {messages.map((msg, i) => {
                if (msg.username === username){
                    return (
                        <div key={i} className="userMessage">
                            <p id='userName'>{msg.username} said:</p>
                            <p id='userMessage'>{msg.message}</p>
                        </div>
                    )
                } else if (msg.name === "Server"){
                    return (
                        <div key={i} className="serverMessage">
                            <p>{msg.message}</p>
                        </div>
                    )

                } else {
                    return (
                        <div key={i} className="otherMessage">
                            <p id='userName'>{msg.username} said:</p>
                            <p id='userMessage'>{msg.message}</p>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default ChatField;