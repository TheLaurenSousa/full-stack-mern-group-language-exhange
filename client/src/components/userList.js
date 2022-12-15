import React, { useEffect, useState } from 'react';
import '../App.css';
import getUsers from '../components/users/getUsers';

const UserList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((res) => {
                const userData = res.data
                const userList = [];
                for (const key of Object.keys(userData)) {
                    userList.push(userData[key])
                }
                setUsers(userList);
            })
    }, [])

    return (
        <div>
            <h2>Users:</h2>
            {users.map((user, i) => {
                return (
                    <p key={i}>{user.username}</p>
                )
            })}
        </div>
    )

}

export default UserList;