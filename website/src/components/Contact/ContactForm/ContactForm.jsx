import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name':'',
            'email':'',
            'message':''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({})
    }

    handleNameChange(e) {
        this.setState({'name':e.target.value});
    }

    handleEmailChange(e) {
        this.setState({'email':e.target.value});
    }

    handleMessageChange(e) {
        this.setState({'message':e.target.value});
    }

    render() {
        return (
        <div className='contact-form'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                </label>

                <label>
                    email:
                    <input type='email' value={this.state.email} onChange={this.handleEmailChange} />
                </label>

                <label>
                    Message:
                    <input type='text' value={this.state.message} onChange={this.handleMessageChange} />
                </label>
            </form>
        </div>
        );
    }
}

export default ContactForm;