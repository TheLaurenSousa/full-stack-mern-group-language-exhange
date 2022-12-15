import React from 'react';
import '../App.css';
import Nav from '../components/nav';
import UserList from '../components/userList';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
    const {state} = useLocation();
    const {name} = state;
    const {id} = state;
    const navigate = useNavigate();

    const createChat = (e) => {
        navigate('/temp')
    }

    return (
        <div>
            <Nav id={id} name={name}/>
            <h1>Welcome {name}!</h1>
            <button onClick={createChat}>Create Chat</button>
            <UserList id={id} name={name}/>
        </div>
    )
}