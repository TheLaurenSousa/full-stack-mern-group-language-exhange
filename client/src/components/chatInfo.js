import React, { useState, useEffect } from 'react';
import '../App.css';
import getChatInfo from '../components/chat/getChatInfo';
import getUserInfo from '../components/users/getUserInfo';

const ChatInfo = (props) => {
    const chatId = props.chatId;
    const [ chatTitle, setChatTitle ] = useState(''); 
    const [ chatDescription, setChatDescription ] = useState('');
    const [ chatOwner, setChatOwner ] = useState('');

    useEffect(() => {
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
    })

    return (
        <div className='chatInfo'>
            <h1>{chatTitle}</h1>
            <p>Description: {chatDescription}</p>
            <p>Chat Creator: {chatOwner}</p>
            <p>Active Users in Chat:</p>
        </div>
    )
}

export default ChatInfo;