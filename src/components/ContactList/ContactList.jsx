import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import css from './ContactList.module.css';

const ContactList = ({ arr, buttonHandler }) => {
  return (
    <ul className={css.contactList}>
      {arr.map(({ id, name, number }) => (
        <li className={css.contactList_item} key={id}>
          <p className={css.contactList_name}>{`${name}`}</p>
          <p className={css.contactList_number}> {`${number}`}</p>{' '}
          <Button
            label="Delete"
            typeOfButton="button"
            buttonFunction={() => buttonHandler(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  buttonHandler: PropTypes.func.isRequired,
};

export default ContactList;
