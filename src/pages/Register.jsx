import React from 'react';
import UserForm from '../components/UserForm/UserForm';
import css from './Pages.module.css';

const Register = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <UserForm typeOfForm={'Register'}></UserForm>
      </div>
    </div>
  );
};

export default Register;
