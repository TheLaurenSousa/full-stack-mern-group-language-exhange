import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Login from '../components/login';

export default () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createUser = user => {
        axios.post('http://localhost:8000/user/create', user)
            .then((res) => {
                navigate('/chat')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (
        <div>
            <h1>Chat Application</h1>
            <h2>Sign Up:</h2>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <Login onSubmitProp = { createUser }/>
        </div>
    )
}