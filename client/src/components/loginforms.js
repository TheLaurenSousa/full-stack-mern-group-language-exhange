import React, { useState } from 'react';
import '../App.css';

const LoginForms = (props) => {
    const { registration } = props;
    const { login } = props;
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const registrationHandler = e => {
        e.preventDefault();
        registration({ username, password, confirmPassword });
    }

    const loginHandler = e => {
        e.preventDefault();
        login({ username, password });
    }

    return (
        <div className='login'>
            <div>
                <form id='login' onSubmit={loginHandler}>
                    <h2>Login:</h2>
                    <p className='inputArea'>
                        <label>Username: </label>
                        <input type='text' name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Password: </label>
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </p>
                    <input type="submit" value="Start Chatting"/>
                </form>
            </div>
            <div>
                <form id='registration' onSubmit={registrationHandler}>
                    <h2>Sign Up:</h2>
                    <p className='inputArea'>
                        <label>Username: </label>
                        <input type='text' name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Password: </label>
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Confirm: </label>
                        <input type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </p>
                    <input type="submit" value="Start Chatting"/>
                </form>
            </div>
        </div>
    );
}

export default LoginForms;