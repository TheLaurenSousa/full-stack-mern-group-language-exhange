import React from 'react';
import '../App.css';

const InitialForm = (props) => {
    const { setName } = props;
    const { updateChatStart } = props;

    const onSubmitHandler = e => {
        e.preventDefault();
        updateChatStart();
        document.getElementById("nameForm").style.display="none";
    }

    return (
    <div id='nameForm'>
        <h1>Chat Application</h1>
        <div>
            <h2>Get started right now!</h2>
            <p>Enter a name to get started: </p>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)}/>
                <input type="submit" value="Start Chatting"/>
            </form>
        </div>
    </div>
    );
}

export default InitialForm;