import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';
import opAuth from 'redux/auth/opAuth';
import css from '../SharedLayout/SharedLayout.module.css';

const SharedLayoutPriv = () => {
  const dispatch = useDispatch();
  const { user } = useAuthRoute();

  const buttonHandler = () => {
    dispatch(opAuth.logOut());
  };

  return (
    <>
      <div className={css.headerSub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/contacts"
          className={({ isActive }) => (isActive ? css.active : css.headerLink)}
        >
          Phonebook
        </NavLink>
      </div>
      <div className={css.headerSub}>
        <p className={css.headerLink}>{user.email}</p>
        <button type="button" onClick={buttonHandler}>
          Log out
        </button>
      </div>
    </>
  );
};

export default SharedLayoutPriv;
