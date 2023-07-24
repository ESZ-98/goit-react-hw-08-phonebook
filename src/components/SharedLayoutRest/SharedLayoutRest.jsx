import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';

const SharedLayoutRest = () => {
  return (
    <>
      <div className={css.header_sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook"
          className={({ isActive }) =>
            isActive ? css.active : css.header_link
          }
        >
          Phonebook
        </NavLink>
      </div>
      <div className={css.header_sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/register"
          className={({ isActive }) =>
            isActive ? css.active : css.header_link
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/goit-react-hw-08-phonebook/login"
          className={({ isActive }) =>
            isActive ? css.active : css.header_link
          }
        >
          Login
        </NavLink>
      </div>
    </>
  );
};

export default SharedLayoutRest;
