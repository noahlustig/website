import React from 'react';
import './NavBar.css';
import logo from './nl-logo-wide-white.png';
import {Link} from 'react-router-dom';

const p = {
    'urls': {
        'home': './',
        'portfolio': './portfolio',
        'readinglist':'./reading-list',
        'blog':'./blog',
        'contact':'./contact'

    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><Link to={p.urls.home}>Home</Link></li>
                    <li><Link to={p.urls.portfolio}>Portfolio</Link></li>
                    <li><Link to={p.urls.readinglist}>Reading List</Link></li>
                    <li><Link to={p.urls.blog}>Blog</Link></li>
                    <li><Link to={p.urls.contact}>Contact</Link></li>
                </ul>
            </div>
        )
    }
};

export default NavBar;