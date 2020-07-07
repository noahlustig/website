import React from 'react';
import logo from '../../cover-logo.png';
import './Header.css';

class Header extends React.Component {

    

    render() {
        return (
            <div className='header'>
                <h1>A little about me...</h1>
                <p>Hi!  I'm Noah Lustig.  I'm a data scientist at my day job,
                    but I also spend a lot of time doing full stack development,
                    working on electronics projects, watching sports (and sports betting).
                </p>
            </div>)
    }
};

export default Header;