import React, { useEffect, useState} from 'react';
import '../App.css';
import getChatMessages from '../components/messages/getChatMessages';

const ChatField = (props) => {
    const username = localStorage.getItem('username');
    const [ messages, setMessages ] = useState([]);
    const chatId = props.chatId

    useEffect(() => {
        getChatMessages(chatId)
            .then((res) => {
                const list = res.data;
                const msgArr = [];
                for (const key of Object.keys(list)) {
                    msgArr.unshift({username: list[key].username, message: list[key].message});
                }
                setMessages(msgArr);
            })
    });

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
                } else if (msg.username === "Server"){
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