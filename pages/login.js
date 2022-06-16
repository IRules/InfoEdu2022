import { TextField } from '@mui/material';
import React from 'react';
import styles from '../styles/Login.module.css';

function login() {
  return (
    <div className={styles.login}>
      <div className={styles.login__filler} />
      <div className={styles.login__logo}>
        <img src="/assets/logo.png" alt="Logo"></img>
      </div>
      <div className={styles.login__filler} />
      <div className={styles.login__form}>
        <div className={styles.login__formContainer}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </div>
  );
}

export default login;
