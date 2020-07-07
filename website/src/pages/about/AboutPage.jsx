import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const AboutPage = () => {
    return (
    <div className='App'>
        <NavBar/>
        <h3>About Me</h3>
        <p>
            Hi!  I'm Noah Lustig.  I'm a data scientist at my day job,
            but I also spend a lot of time doing full stack development,
            working on electronics projects, watching sports (and sports betting).
        </p>
    </div>
    ); 
    
};

export default AboutPage;