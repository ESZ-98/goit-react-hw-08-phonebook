import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import opAuth from '../../redux/auth/opAuth';
import css from './UserForm.module.css';

const UserForm = ({ typeOfForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formReset = typeOfForm => {
    if (typeOfForm === 'Register') {
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  const handleSubmitReg = (name, email, pass) => {
    if (pass.length < 6) {
      alert('Password must be at least 7 characters long');
    } else {
      let credentials = {
        name: `${name}`,
        email: `${email}`,
        password: `${pass}`,
      };
      dispatch(opAuth.register(credentials));
    }
  };

  const handleSubmitLog = (email, pass) => {
    const credentials = { email: email, password: pass };
    dispatch(opAuth.logIn(credentials));
  };

  const handleSubmit = (typeOfForm, name, email, pass) => {
    if (typeOfForm === 'Register') {
      handleSubmitReg(name, email, pass);
    } else {
      handleSubmitLog(email, pass);
    }
  };

  const handleChangeUser = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(typeOfForm, name, email, password);
          formReset();
        }}
        className={css.container + css.form}
      >
        {typeOfForm === 'Register' && (
          <label className={css.form__label}>
            Username
            <input
              type="text"
              name="name"
              title="Your username for this site"
              onChange={handleChangeUser}
              value={name}
              required
            />
          </label>
        )}

        <label className={css.form__label}>
          Email
          <input
            type="email"
            name="email"
            title="Must contain @ and the site, e.g. john.doe@example.com"
            onChange={handleChangeUser}
            value={email}
            required
          />
        </label>
        <label className={css.form__label}>
          Password
          <input
            type="password"
            name="password"
            title="Make sure to remember it well."
            onChange={handleChangeUser}
            value={password}
            required
          />
        </label>
        <button type="submit" className={css.button}>
          {typeOfForm === 'Register' ? typeOfForm : 'Log In'}
        </button>
      </form>
    </>
  );
};

export default UserForm;
