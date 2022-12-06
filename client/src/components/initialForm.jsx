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
    <div>
        <h1>Chat Application</h1>
        <div id='nameForm'>
            <h2>Get started right now!</h2>
            <p>Enter a name to get started: </p>
            <form onSubmit={onSubmitHandler} className='nameForm'>
                <input type="text" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)}/>
                <input type="submit" value="Start Chatting"/>
            </form>
        </div>
    </div>
    );
}

export default InitialForm;