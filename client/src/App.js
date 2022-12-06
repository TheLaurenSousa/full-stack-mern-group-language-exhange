import React, { useState }from 'react';
import './App.css';
import Chat from './components/chat';
import InitialForm from './components/initialForm';

function App() {
  const [chatStart, setChatStart] = useState(false);
  const [name, setName] = useState('');

  const updateChatStart = e => {
    setChatStart(true);
  }

  const updateName = name => {
    setName(name);
  }

  return (
    <div className="App">
      {!chatStart && <InitialForm setName={updateName} updateChatStart = {updateChatStart}/>}
      {chatStart && <Chat name={name}/>}
    </div>
  );
}

export default App;
