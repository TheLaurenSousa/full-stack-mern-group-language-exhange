import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import io from 'socket.io-client';
import logoutProcess from './users/logout';

const Nav = (props) => {
    const [ socket ] = useState(() => io(':8000'));
    const navigate = useNavigate();
    const state = props;
    const name = state.name;
    const id = state.id;


    const logout = e => {
        logoutProcess()
            .then(res => {
                socket.emit("new_message", {msg: `${name} has left the chat`, name: "Server"})
                socket.emit("user_left", {msg: name})
            })
            .catch(err => console.log(err));
        navigate('/')
    }

    const onHomeClick = e => {
        navigate('/home', {state: {id: id, name: name}})
    }

    return (
        <div className='nav'>
            <button onClick={onHomeClick}>Home</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Nav;