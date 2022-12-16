import React, { useEffect, useState } from 'react';
import '../App.css';
import Nav from '../components/nav';
import getUsers from '../components/users/getUsers';

export default () => {
    const username = localStorage.getItem('username');
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUsers()
            .then((res) => {
                const list = []
                const userData = res.data
                for (const key of Object.keys(userData)){
                    list.push({id: userData[key]._id, username: userData[key].username})
                }
                setUserList(list);
            })
    }, []);

    return (
        <div>
            <Nav/>
            <h1>Welcome {username}!</h1>
            <div>
                {userList.map(({id, username}) => {
                    return (
                        <p key={id}>{username}</p>
                    )
                })}
            </div>
        </div>
    );
}