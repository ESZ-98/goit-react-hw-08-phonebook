import React, { useEffect } from 'react';
import { Form } from '../Form/Form';
import Input from '../Input/Input';
import ContactList from '../ContactList/ContactList';
import {
  selectFilter,
  selectFiltered,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import operations from '../../redux/contacts/opContacts';
import css from './ContactApp.module.css';

export const ContactsApp = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filtered = useSelector(selectFiltered);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const filterHandler = event => {
    const { name, value } = event.target;
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  const removeContact = id => {
    dispatch(operations.deleteContact(id));
  };

  useEffect(() => {
    dispatch(operations.fetchDisplayContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Form />
      <Input
        label="Find contacts by name"
        type="text"
        dataName="filter"
        validation="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Search isn't case sensitive."
        functionChange={filterHandler}
        stateField={filter}
      />
      <ContactList arr={filtered} buttonHandler={removeContact} />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};

export default ContactsApp;
