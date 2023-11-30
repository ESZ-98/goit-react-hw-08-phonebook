import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ label, typeOfButton, buttonFunction }) => {
  return (
    <button className={css.button} type={typeOfButton} onClick={buttonFunction}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  typeOfButton: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func,
};

export default Button;
