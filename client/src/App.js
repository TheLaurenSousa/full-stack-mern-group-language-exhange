import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Home from './views/Home';
import Chat from './views/Chat';
import Temp from './views/Temp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Chat/>} path="/chat"/>
        <Route element={<Temp/>} path="/temp"/>
      </Routes>
    </div>
  );
}

export default App;
