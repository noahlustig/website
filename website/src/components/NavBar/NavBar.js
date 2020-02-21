import React from 'react';
import './NavBar.css';
import logo from './nl-logo-wide-white.png';
import {Link} from 'react-router-dom';

const p = {
    'urls': {
        'home': './',
        'portfolio': './portfolio'

    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><Link to={p.urls.home}><img src={logo} alt='NL.tech logo' /></Link></li>
                    <li><Link to={p.urls.portfolio}>Portfolio</Link></li>
                    <li><a href="#">Sports Betting</a></li>
                    <li><a href="#">Algotrading</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Reading List</a></li>
                    <li><a href="#">Hire Me!</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
};

export default NavBar;