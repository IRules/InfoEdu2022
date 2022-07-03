import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Alert, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import styles from '../../styles/Auth.module.css';
import { Box } from '@mui/system';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__space}>
        {error ? <Alert severity="error">{error}</Alert> : ''}
        <div className={styles.login__spaceForm}>
          <h1 className={styles.login__spaceFormTitle}>Bun venit! Logare:</h1>
          <h4 className={styles.login__spaceFormSecondTitle}>
            Va rugam sa va logati inainte de a continua
          </h4>
          <input
            className={styles.login__spaceFormUsername}
            type="text"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className={styles.login__spaceFormPassword}
            type="password"
            name="password"
            placeholder="Parola ta sigura..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={signIn}>
            Continua
          </Button>
        </div>
      </div>
      <div className={styles.login__art}>
        <img src="/assets/login.svg" alt="" className={styles.login__artImg} />
      </div>
    </div>
  );
}

function SignUp() {
  const [error, setError] = useState('');

  const [nume, setNume] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      setError(error.message)
    );
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__space}>
        {error ? <Alert severity="error">{error}</Alert> : ''}
        <div className={styles.login__spaceForm}>
          <h1 className={styles.login__spaceFormTitle}>
            Bun venit! Inregistrare:
          </h1>
          <h4 className={styles.login__spaceFormSecondTitle}>
            Va rugam sa va inregistrati inainte de a continua
          </h4>
          <input
            className={styles.login__spaceFormUsername}
            type="text"
            name="Email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className={styles.login__spaceFormPassword}
            type="password"
            name="password"
            placeholder="Parola ta sigura..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={signUp}>
            Continuati
          </Button>
        </div>
      </div>
      <div className={styles.login__art}>
        <img src="/assets/login.svg" alt="" className={styles.login__artImg} />
      </div>
    </div>
  );
}

export default function Auth() {
  const [authMethod, setAuthMethod] = React.useState(0);
  return (
    <>
      {authMethod ? <SignUp /> : <Login />}
      <div className={styles.auth__method}>
        <Box>
          <BottomNavigation
            showLabels
            value={authMethod}
            onChange={(event, newValue) => {
              setAuthMethod(newValue);
            }}
          >
            <BottomNavigationAction label="Logare" icon={<LockOpenIcon />} />
            <BottomNavigationAction label="Inregistrare" icon={<LoginIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
}
