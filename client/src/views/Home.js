import React from 'react';
import '../App.css';
import Nav from '../components/nav';
import UserList from '../components/userList';
import { useLocation } from 'react-router-dom';

export default () => {
    const {state} = useLocation();
    const{name} = state;

    return (
        <div>
            <Nav name={name}/>
            <h1>Welcome {name}!</h1>
            <UserList/>
        </div>
    )
}