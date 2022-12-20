import React, { useState, useEffect } from 'react';
import '../App.css';
import getChatInfo from '../components/chat/getChatInfo';
import getUserInfo from '../components/users/getUserInfo';
import deleteChat from '../components/chat/deleteChat';
import { useNavigate } from 'react-router-dom';

const ChatInfo = (props) => {
    const chatId = props.chatId;
    const [ chatTitle, setChatTitle ] = useState(''); 
    const [ chatDescription, setChatDescription ] = useState('');
    const [ chatOwner, setChatOwner ] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

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

    const deleteHandler = () => {
        deleteChat(chatId)
            .then(res => {
                if (res.data.message === "Success!"){
                    localStorage.setItem('chatId', 0)
                    navigate('/home')
                } else {
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }
            })
    }

    return (
        <div className='chatInfo'>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <h1>{chatTitle}</h1>
            <p>Description: {chatDescription}</p>
            <p>Chat Creator: {chatOwner}</p>
            <button onClick={deleteHandler}>Delete Chat</button>
        </div>
    )
}

export default ChatInfo;