import React from 'react';
import css from '../SharedLayout/SharedLayout.module.css';
import { useAuthRoute } from 'hook/useAuthRoute';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import opAuth from '../../redux/auth/opAuth';
import { NavLink } from 'react-router-dom';

const SharedLayoutPriv = () => {
  const dispatch = useDispatch();
  const { user } = useAuthRoute();

  const buttonHandler = () => {
    dispatch(opAuth.logOut());
  };

  return (
    <>
      <div className={css.header_sub}>
        <NavLink
          to="/goit-react-hw-08-phonebook/contacts"
          className={({ isActive }) =>
            isActive ? css.active : css.header_link
          }
        >
          Phonebook
        </NavLink>
      </div>
      <div className={css.header_sub}>
        <p className={css.header_link}>{user.email}</p>
        <Button
          label="Logout"
          typeOfButton="button"
          buttonFunction={() => buttonHandler()}
        />
      </div>
    </>
  );
};

export default SharedLayoutPriv;
