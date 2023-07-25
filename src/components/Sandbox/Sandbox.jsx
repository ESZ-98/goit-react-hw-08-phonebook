import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/sandbox/selectors';
import selectors from '../../redux/contacts/selectors';
import opSandbox from '../../redux/sandbox/opSandbox';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import css from './Sandbox.module.css';

const Sandbox = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = id => {
    dispatch(opSandbox.deleteContactSandbox(id));
  };

  useEffect(() => {
    dispatch(opSandbox.fetchSandboxToDisplay());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />

      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Search isn't case sensitive."
        value={filter}
        onChange={getFilteredContacts}
      />
      <ContactList
        contacts={getFilteredContacts(contacts, filter)}
        onDeleteContact={removeContact}
      />

      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

export default Sandbox;
