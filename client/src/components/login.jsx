import React, { useState } from 'react';
import '../App.css';

const Login = (props) => {
    const { onSubmitProp } = props;
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("Username: "+username+ " and Password: "+password)
        onSubmitProp({ username, password });
    }

    return (
    <form id='NameForm' onSubmit={onSubmitHandler}>
        <p>
            <label>Username: </label>
            <input type='text' name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)} value={username}/>
        </p>
        <p>
            <label>Password: </label>
            <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        </p>
        <input type="submit" value="Start Chatting"/>
    </form>
    );
}

export default Login;