import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Bio from '../../components/Bio/Bio.jsx';

const HomePage = () => {
    return (
    <div className="App">
        <NavBar />
        <Header/>
        <Bio />
    </div>

    );
};

export default HomePage;