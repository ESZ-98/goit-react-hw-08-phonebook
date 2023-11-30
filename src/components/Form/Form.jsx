import React, { useState } from 'react';
import css from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import operations from '../../redux/contacts/opContacts';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitForm = () => {
    if (contacts.filter(contact => contact.name === name).length !== 1) {
      let contact = { name: name, number: number, id: nanoid() };
      dispatch(operations.postContactOnList(contact));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const changeHandler = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };
  const idForLabelAndAddContacts = nanoid();
  return (
    <>
      <label className={css.form_label} htmlFor={idForLabelAndAddContacts}>
        Add contact below
      </label>
      <form
        onSubmit={event => {
          event.preventDefault();
          submitForm();
          formReset();
        }}
        className={css.form}
        id={idForLabelAndAddContacts}
      >
        <Input
          label="Name"
          type="text"
          dataName="name"
          validation="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          functionChange={changeHandler}
          stateField={name}
        />
        <Input
          label="Number"
          type="tel"
          dataName="number"
          validation="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          functionChange={changeHandler}
          stateField={number}
        />
        <Button label="Add contact" typeOfButton="submit" />
      </form>
    </>
  );
};

//     <form className={css.contact_form} onSubmit={handleSubmit}>
//       <span className={css.contact_span}>Name</span>
//       <input
//         className={css.contact_input}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         value={name}
//         onChange={handleChange}
//         required
//       />
//       <span className={css.contact_span}>Number</span>
//       <input
//         className={css.contact_input}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         value={number}
//         onChange={handleChange}
//         required
//       />
//     </form>

export default Form;
