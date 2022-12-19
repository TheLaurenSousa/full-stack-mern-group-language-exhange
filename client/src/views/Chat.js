import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import Nav from '../components/nav';

export default () => {
    const [ socket ] = useState(() => io(':8000'));
    const [ messages, setMessages ] = useState([]);
    const username = localStorage.getItem('username');
    const [usersInChat, setUsersInChat] = useState([]);
    const chatId = useParams().id;

    useEffect(() => {
        console.log("here")
        console.log(chatId)
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
        socket.emit("new_message", {msg: `${username} has entered the chat`, name: "Server"})
        socket.emit("new_user", {msg: username})
    }

    return (
        <div>
            <Nav/>
            <h2>Chat</h2>
            <p>{chatId}</p>
            <div className='chat'>
                <ChatField messages={messages}/>
                <ChatInput socket={socket}/>
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