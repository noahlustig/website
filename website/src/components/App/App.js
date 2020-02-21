import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import NavBar from '../NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar />
        <div className="left-box">
            <p>Laurzel is my thotzel</p>
        </div>
    </div>
  );
}

export default App;
