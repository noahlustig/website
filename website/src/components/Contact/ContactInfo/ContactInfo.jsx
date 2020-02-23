import React from 'react';
import './ContactInfo.css';

class ContactInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'name': 'Noah Lustig',
            'email': 'noah@noahlustig.tech',
            'github': 'https://github.com/noahlustig/',
            'linkedin': 'https://www.linkedin.com/in/noahlustig/',
            'pic': {
                'src': '#',
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
                    <a href={'mailto: ' + this.state.email}>email</a>
                    <a href={this.state.github}>Github</a>
                    <a href={this.state.linkedin}>LinkedIn</a>
                </div>
            </div>
        );
    }
};

export default ContactInfo;