import React, { useState } from 'react';
import Input from '../Input/Input';
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

  const handleChangeUser = e => {
    const { name, value } = e.target;
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
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(typeOfForm, name, email, password);
          formReset();
        }}
        className={css.container + css.form}
      >
        {typeOfForm === 'Register' && (
          <Input
            label="Username"
            type="text"
            dataName="name"
            title="Your username for this site"
            required
            functionChange={handleChangeUser}
            stateField={name}
          />
        )}
        <Input
          label="Email"
          type="email"
          dataName="email"
          title="Must contain @ and the site, e.g. john.doe@example.com"
          required
          functionChange={handleChangeUser}
          stateField={email}
        />
        <Input
          label="Password"
          type="password"
          dataName="password"
          title="Make sure to remember it well."
          required
          functionChange={handleChangeUser}
          stateField={password}
        />
        <button type="submit" className={css.button}>
          {typeOfForm === 'Register' ? typeOfForm : 'Log In'}
        </button>
      </form>
    </>
  );
};
export default UserForm;
