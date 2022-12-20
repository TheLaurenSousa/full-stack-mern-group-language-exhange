import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const ChatUsers = () => {
    const [ usersInChat, setUsersInChat ] = useState([]);
    const [ socket ] = useState(() => io(':8000'));

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

    return (
        <div>
            <p>Active Users in Chat:</p>
            <ul>
                {usersInChat.map((user, i) => {
                    return (
                        <li key={i}>{user.msg}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChatUsers;
