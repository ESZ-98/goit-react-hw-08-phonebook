import React from 'react';
import ContactApp from '../components/ContactApp';
import css from './Pages.module.css';

const Contacts = () => {
  return (
    <div className={css.background}>
      <ContactApp />
    </div>
  );
};

export default Contacts;
