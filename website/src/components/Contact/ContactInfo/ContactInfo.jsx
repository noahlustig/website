import React from 'react';
import './ContactInfo.css';
import profilePic from './profile.jfif';
import github from './github.png';
import email from './email.png';
import linkedin from './linkedin.png';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'name': 'Noah Lustig',
            'email': 'noah@noahlustig.tech',
            'github': 'https://github.com/noahlustig/',
            'linkedin': 'https://www.linkedin.com/in/noahlustig/',
            'pic': {
                'src': profilePic,
                'alt': 'picture of Noah Lustig'
            }
        };
        };

    render() {
        return (
            <div className = 'contact-info'>
                <div className= 'profile-pic'>
                    <img src={this.state.pic.src} alt={this.state.pic.alt} />
                </div>

                <div className='contact-details'>
                    <a href={'mailto: ' + this.state.email}> <img className= 'contact-logo' src={email} alt="Email" /> </a>
                    <a href={this.state.github}><img className= 'contact-logo' src={github} alt='GitHub' /></a>
                    <a href={this.state.linkedin}><img className= 'contact-logo' src={linkedin} alt='LinkedIn' /></a>
                </div>
            </div>
        );
    }
};

export default ContactInfo;