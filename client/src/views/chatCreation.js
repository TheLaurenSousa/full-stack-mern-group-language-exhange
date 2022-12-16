import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createChat from '../components/chat/createChat';
import Nav from '../components/nav'

export default (props) => {
    const [ title, setTitle ] = useState('');
    const [ users, setUsers ] = useState('');
    const [ messages, setMessages ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();
    const state = props;
    const name  = state.name;
    const id = state.id;



    const createChatHandler = e => {
        e.preventDefault();
        createChat({title, users, messages})
            .then((res) => {
                if (res.data.message === "Success!"){
                    navigate('/chat', {state: {id: id, name: name}})
                    // To Do: Update this to send user into
                } else {
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorArr[key].message)
                    }
                    setErrors(errorArr);
                }
            })
    }

    return (
        <div>
            <Nav id={id} name={name}/>
            <h1>Testing Creating a Chat - {name}</h1>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <form onSubmit={createChatHandler}>
                <h2>Create a Chat:</h2>
                <p>
                    <label>Title: </label>
                    <input type='text' name='title' onChange={(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Add Users: </label>
                    <input type='text' onChange={(e) => setUsers({username: e.target.value})}/>
                </p>
                <p>
                    <label>Set Initial Message: </label>
                    <input type='text' onChange={(e) => setMessages({username: "Temp", message: e.target.value})}/>
                </p>
                <input type="submit" value="Start Chatting"/>
            </form>
        </div>
    )
}