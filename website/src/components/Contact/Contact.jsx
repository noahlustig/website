import React from 'react';

import ContactForm from './ContactForm/ContactForm.jsx';
import ContactInfo from './ContactInfo/ContactInfo.jsx';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
          <div className='contact'>
            <ContactInfo />
            <ContactForm />
          </div>
        );
    }
}

export default Contact;