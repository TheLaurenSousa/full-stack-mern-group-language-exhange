import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Login from '../components/login';

export default () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const registration = user => {
        axios.post('http://localhost:8000/user/create', user)
            .then((res) => {
                if (res.data.message === "Success!"){
                    const username = user.username
                    console.log(username);
                    navigate('/chat', {state: {name: username}})
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
        axios.post('http://localhost:8000/login', user)
            .then(res => {
                if (res.data.message === "Success!"){
                    const username = user.username;
                    navigate('/chat', {state: {name: username}})
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
            <h1>Chat Application</h1>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <Login registration = { registration } login = { login }/>
        </div>
    )
}