import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logoutProcess from './users/logout';

const Nav = () => {
    const navigate = useNavigate();

    const logout = e => {
        logoutProcess()
            .then(res => {
                localStorage.clear();
            })
            .catch(err => console.log(err));
        navigate('/')
    }

    const onExploreClick = e => {
        navigate('/home')
    }

    const createChat = (e) => {
        navigate('/chat/new')
    }

    return (
        <div className='nav'>
            <h2 onClick={onExploreClick}>Group Language Exchange</h2>
            <ul>
                <li onClick={onExploreClick}>Explore Chats</li>
                <li onClick={createChat}>Create Chat</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    );
}

export default Nav;