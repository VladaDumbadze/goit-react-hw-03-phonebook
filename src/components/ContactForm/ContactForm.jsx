import React, { Component } from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
  formNameId = shortid.generate();
  formNumberId = shortid.generate();
    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name] : value });
    };

    hendleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state)
      this.reset();
    };

  reset = () => {
    this.setState({ name: '', number: '' });
   }
    render() {
        return (
            <form onSubmit={this.hendleSubmit} >
        <label htmlFor={this.formNameId}>
          Name
            <input
            id={this.formNameId}
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.formNumberId}>
          Number 
           <input
            id={this.formNumberId}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
              
            />
        </label>

        <button type="submit">Add contact</button>
      </form>
        );
    }
}

export default ContactForm;

ContactForm.propTypes = {
  
  onSubmit: PropTypes.func.isRequired,
};