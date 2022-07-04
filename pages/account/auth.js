import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { auth } from '../../lib/firebase';
import Router from 'next/router';

function Login() {
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Router.push('/');
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__space}>
        <div className={styles.login__spaceForm}>
          {error ? <Alert severity="error">{error}</Alert> : ''}
          <br></br>
          <h1 className={styles.login__spaceFormTitle}>Bun venit! Logare:</h1>
          <h4 className={styles.login__spaceFormSecondTitle}>
            Va rugam sa va logati inainte de a continua
          </h4>
          <br></br>
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

function SignUp() {
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    if (name.length < 3) {
      setError('Numele trebuie sa contina minim 3 caractere');
    } else {
      axios
        .post('/api/account/createUser', {
          username: name,
          email: email,
          password: password,
        })
        .then(() => {
          Router.push('/account');
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__space}>
        <div className={styles.login__spaceForm}>
          {error ? <Alert severity="error">{error}</Alert> : ''}
          <br></br>
          <h1 className={styles.login__spaceFormTitle}>
            Bun venit! Inregistrare:
          </h1>
          <h4 className={styles.login__spaceFormSecondTitle}>
            Va rugam sa va inregistrati inainte de a continua
          </h4>
          <br></br>
          <input
            className={styles.login__spaceFormUsername}
            type="text"
            name="Nume"
            placeholder="Username..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
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

  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser != null) {
      Router.push('/account');
    }
  }, [auth.currentUser]);

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
