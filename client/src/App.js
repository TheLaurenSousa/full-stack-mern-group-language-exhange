import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Chat from './views/Chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Create/>} path="/"/>
        <Route element={<Chat/>} path="/chat"/>
      </Routes>
    </div>
  );
}

export default App;
