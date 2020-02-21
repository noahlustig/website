import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">ML</a></li>
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