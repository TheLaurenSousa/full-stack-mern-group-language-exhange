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
                    list.push({id: chatData[key]._id, title: chatData[key].title, language: chatData[key].language})
                }
                setChatList(list);
            })
    });

    return (
        <div>
            <Nav/>
            <h1>Welcome {username}!</h1>
            <p>Explore Active Chats:</p>
            <table>
                <thead>
                    <tr>
                        <th>Chat</th>
                        <th>Language</th>
                        <th>Join</th>
                    </tr>
                </thead>
                <tbody>
                    {chatList.map(({id, title, language, description}) => {
                        const url = `/chat/${id}`
                        return (
                            <tr key={id}>
                                <td>{title}</td>
                                <td>{language}</td>
                                <td><Link to ={url}>Join</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}