import React from 'react';
import './Bio.css';
import profilePic from './profile.jfif'

class Bio extends React.Component {

    bio = {
        'alt': 'Noah Lustig',
        'description': 'Noah Lustig is mathematician, statistician and data scientist living in Phoenix, AZ.'
    }

    render() {
        return (
            <div className='bio'>
                <img src={profilePic} alt={this.bio.alt} />
                <p>{this.bio.description}</p>
            </div>)
    }
};

export default Bio;