import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/contacts/selectors';
import selectors from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import operations from '../../redux/contacts/opContacts';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import css from './ContactApp.module.css';

const ContactApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const submitForm = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (contacts.some(contact => name === contact.name)) {
      alert(`{$name} is already in contacts.`);
      return;
    }

    dispatch(setFilter(newContact));
  };

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(operations.fetchDisplayContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm contacts={contacts} onSubmit={submitForm} />

      <Filter filter={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts(contacts, filter)}
        onDeleteContact={deleteContact}
      />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

export default ContactApp;
