import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import LoginForms from '../components/loginforms';
import loginProcess from '../components/users/login';
import registrationProcess from '../components/users/registration';

export default () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const registration = user => {
        registrationProcess(user)
            .then((res) => {
                if (res.data.message === "Success!"){
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('id', res.data.user._id);
                    navigate('/home');
                } else {
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }
            });
    }

    const login = user => {
        loginProcess(user)
            .then(res => {
                if (res.data.message === "Success!"){
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('id', res.data.user._id);
                    navigate('/home');
                } else {
                    const errorResponse = res.data;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key])
                    }
                    setErrors(errorArr);
                }
            });
    }

    return (
        <div>
            <h1>The Group Language Exchange</h1>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <LoginForms registration = { registration } login = { login }/>
        </div>
    )
}