import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.module.css';
import { nanoid } from '@reduxjs/toolkit';

const Input = ({
  label,
  type,
  dataName,
  validation,
  title,
  functionChange,
  stateField,
}) => {
  const idForLabelAndInput = nanoid();
  return (
    <label className={css.label} htmlFor={idForLabelAndInput}>
      {label}
      <input
        className={css.input}
        type={type}
        name={dataName}
        pattern={validation}
        title={title}
        required
        onChange={functionChange}
        value={stateField}
        id={idForLabelAndInput}
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  validation: PropTypes.string,
  title: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
  stateField: PropTypes.string.isRequired,
};

export default Input;
