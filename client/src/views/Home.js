import React, { useEffect, useState } from 'react';
import '../App.css';
import Nav from '../components/nav';
import getChats from '../components/chat/getChats';
import { Link } from 'react-router-dom';

export default () => {
    const username = localStorage.getItem('username');
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        getChats()
            .then((res) => {
                const list = []
                const chatData = res.data
                for (const key of Object.keys(chatData)){
                    list.push({id: chatData[key]._id, title: chatData[key].title})
                }
                setChatList(list);
            })
    }, []);

    return (
        <div>
            <Nav/>
            <h1>Welcome {username}!</h1>
            <p>Chats:</p>
            <div>
                {chatList.map(({id, title}) => {
                    const test = `/chat/${id}`
                    return (
                        <Link to={test} key={id}>{title}</Link>
                    )
                })}
            </div>
        </div>
    );
}