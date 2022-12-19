import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import ChatInput from '../components/chatInput';
import ChatField from '../components/chatField';
import ChatNav from '../components/chatNav';
import getChatInfo from '../components/chat/getChatInfo';
import getUserInfo from '../components/users/getUserInfo';

export default () => {
    const [ socket ] = useState(() => io(':8000'));
    const [ messages, setMessages ] = useState([]);
    const username = localStorage.getItem('username');
    const [usersInChat, setUsersInChat] = useState([]);
    const chatId = useParams().id;
    const [ chatTitle, setChatTitle ] = useState(''); 
    const [ chatDescription, setChatDescription ] = useState('');
    const [chatOwner, setChatOwner ] = useState('');

    // Triggers when user enters the chat, notifies other users
    useEffect(() => {
        enterTheChat();
        chatInfo(chatId);
        socket.on("new_message", data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages];
            })
        });
    }, []);

    // Tracks users currently in the chat
    useEffect(() => {
        socket.on("new_user", data => {
            if (data.msg !== "Server" && usersInChat.includes(data.msg) === false){
                setUsersInChat(users => {
                    return [...users, data]
                })
            }
        });
    }, []);

    // Removes user from users in the chat when they leave
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

    const chatInfo = (chatId) => {
        getChatInfo(chatId)
            .then((res) => {
                const info = res.data;
                setChatTitle(info.title);
                setChatDescription(info.description);
                getUserInfo(info.owner)
                    .then((res) => {
                        setChatOwner(res.data.username)
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <ChatNav/>
            <div className='chatPage'>
                <div className='chat'>
                    <ChatField messages={messages}/>
                    <ChatInput socket={socket}/>
                </div>
                <div className='chatInfo'>
                    <h1>{chatTitle}</h1>
                    <p>Description: {chatDescription}</p>
                    <p>Chat Creator: {chatOwner}</p>
                    <p>Active Users in Chat:</p>
                    <ul>
                        {usersInChat.map((user, i) => {
                            return (
                                <li key={i}>{user.msg}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}