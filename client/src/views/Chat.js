import React, { useState, useEffect } from 'react';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import Nav from '../components/nav';
import { useLocation } from 'react-router-dom';

export default () => {
    const [ socket ] = useState(() => io(':8000'));
    const [ messages, setMessages ] = useState([]);
    const {state} = useLocation();
    const {name} = state;
    const [usersInChat, setUsersInChat] = useState([]);

    useEffect(() => {
        enterTheChat();
        socket.on("new_message", data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages];
            })
        });
    }, []);

    useEffect(() => {
        socket.on("new_user", data => {
            if (data.msg !== "Server" && usersInChat.includes(data.msg) === false){
                setUsersInChat(users => {
                    return [...users, data]
                })
            }
        });
    }, []);

    useEffect(() => {
        socket.on("user_left", data => {
            const userLeft = data.msg;
            setUsersInChat(usersInChat.filter(item => item.msg !== userLeft));
        })
    });

    const enterTheChat = () => {
        socket.emit("new_message", {msg: `${name} has entered the chat`, name: "Server"})
        socket.emit("new_user", {msg: name})
    }

    return (
        <div>
            <Nav name={name}/>
            <h2>Chat</h2>
            <div className='chat'>
                <ChatField name={name} messages={messages}/>
                <ChatInput name={name} socket={socket}/>
            </div>
            {/* To Do: Make this display on the side of the chat */}
            {usersInChat.map((user, i) => {
                return (
                    <p key={i}>{user.msg}</p>
                )
            })}
        </div>
    )
}