import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import logoutProcess from './users/logout';

const Nav = (props) => {
    const [ socket ] = useState(() => io(':8000'));
    const name = props.name;


    const logout = e => {
        logoutProcess()
            .then(res => {
                socket.emit("new_message", {msg: `${name} has left the chat`, name: "Server"})
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='nav'>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/'}>
                <button onClick={logout}>Logout</button>
            </Link>
        </div>
    );
}

export default Nav;