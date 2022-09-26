import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter'


export class App extends Component {
  
  state = {
   contacts: [
    
  ],
    filter: '',
  };
  
  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    contacts.some(contact => contact.name.toUpperCase() === name.toUpperCase())
      ? alert(`${name} is already in contacts`)
      : contacts.push({ id: shortid(), name: name, number: number });
    this.setState({ contacts: contacts });
  }; 

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };


  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }

  };


  componentDidUpdate(prevState, prevProps) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { contacts, filter } = this.state; 
     const contactsFiltered = [];
    contacts.forEach(contact => {
      contact.name.toLowerCase().includes(filter.toLowerCase()) &&
        contactsFiltered.push(contact);
    });
    console.log(contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        
        
        <Filter filter={filter} handleChange={this.handleChange} />

        {contactsFiltered && (
          <ContactList
            contacts={contactsFiltered}
            onDeliteContact={this.deleteContact}
          />
        )}
      </div>
        
   
  );
}
};
  


export default App;