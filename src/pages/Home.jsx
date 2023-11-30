import React from 'react';
import css from './Pages.module.css';

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <h1>Welcome to Phonebook</h1>
        <h3>Your private contact list where you can keep your contacts online!</h3>
      </div>
    </div>
  );
};

export default Home;
