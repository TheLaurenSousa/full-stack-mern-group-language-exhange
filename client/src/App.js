import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Chat from './views/Chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Chat/>} path="/chat"/>
      </Routes>
    </div>
  );
}

export default App;
