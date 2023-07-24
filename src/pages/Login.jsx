import React from 'react';
import UserForm from '../components/UserForm/UserForm';
import css from './Pages.module.css';

const Login = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <UserForm typeOfForm={'Login'}></UserForm>
      </div>
    </div>
  );
};

export default Login;
