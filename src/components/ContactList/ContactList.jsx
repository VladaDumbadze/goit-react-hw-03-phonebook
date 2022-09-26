import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeliteContact }) =>
    <ul >{contacts.map(({ id, name, number }) =>
        <li className={css.ContactItem}  key={id}>
            <p className={css.Item}>{name} : {number}</p>
            
            <button className={css.Item} onClick={()=> onDeliteContact(id)}> Delete</button>
        </li>)}
    </ul>;

export default ContactList;

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeliteContact: PropTypes.func.isRequired,
};