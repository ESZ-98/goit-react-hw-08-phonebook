import React from 'react';
import Sandbox from '../components/Sandbox/Sandbox';
import css from './Pages.module.css';

const Home = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <h1>Phonebook</h1>
      </div>
      <Sandbox />
    </div>
  );
};

export default Home;
