import React from 'react';
import logo from './nl-tech-logo.png';
import './Header.css';

class Header extends React.Component {

    header = {
        'src':'./NL.Techlogo.png',
        'alt': 'NL.Tech logo'
    }

    render() {
        return (
            <div className='header'>
                <img src={logo} alt={this.header.alt} />
            </div>)
    }
};

export default Header;