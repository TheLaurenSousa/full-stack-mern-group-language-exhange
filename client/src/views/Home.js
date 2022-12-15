import React from 'react';
import '../App.css';
import Nav from '../components/nav';
import UserList from '../components/userList';
import { useLocation } from 'react-router-dom';

export default () => {
    const {state} = useLocation();
    const {name} = state;
    const {id} = state;

    return (
        <div>
            <Nav id={id} name={name}/>
            <h1>Welcome {name}!</h1>
            <UserList id={id} name={name}/>
        </div>
    )
}