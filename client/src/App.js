import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Home from './views/Home';
import Chat from './views/Chat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Chat/>} path="/chat"/>
      </Routes>
    </div>
  );
}

export default App;
