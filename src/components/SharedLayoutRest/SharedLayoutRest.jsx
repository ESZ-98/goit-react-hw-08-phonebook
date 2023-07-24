import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../sharedLayout/SharedLayout.module.css';

const SharedLayoutRest = () => {
  return (
    <>
      <div className={css.headerSub}>
        <NavLink
          to="/goit-react-hw-08-phonebook"
          className={({ isActive }) => (isActive ? css.active : css.headerLink)}
        >
          Phonebook
        </NavLink>
      </div>
      <div className={css.headerSub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/register"
          className={({ isActive }) => (isActive ? css.active : css.headerLink)}
        >
          Register
        </NavLink>
        <NavLink
          to="/goit-react-hw-08-phonebook/login"
          className={({ isActive }) => (isActive ? css.active : css.headerLink)}
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default SharedLayoutRest;
