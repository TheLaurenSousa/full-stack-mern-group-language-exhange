import React, { useState } from 'react';
import '../App.css';

const Login = (props) => {
    const { onSubmitProp } = props;
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ username, password, confirmPassword });
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
        <p>
            <label>Confirm Password: </label>
            <input type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        </p>
        <input type="submit" value="Start Chatting"/>
    </form>
    );
}

export default Login;