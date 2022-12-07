import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Chat from './views/Chat';

function App() {
  // const [chatStart, setChatStart] = useState(false);
  // const [name, setName] = useState('');

  // const updateChatStart = e => {
  //   setChatStart(true);
  // }

  // const updateName = name => {
  //   setName(name);
  // }

  return (
    <div className="App">
      <Routes>
        <Route element={<Create/>} path="/"/>
        <Route element={<Chat/>} path="/chat"/>
      </Routes>
      {/* {!chatStart && <InitialForm setName={updateName} updateChatStart = {updateChatStart}/>}
      {chatStart && <Chat name={name}/>} */}
    </div>
  );
}

export default App;
