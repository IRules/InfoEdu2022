import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Alert, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import styles from '../../styles/Auth.module.css';
import { Box } from '@mui/system';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';
import { auth, google } from '../../lib/firebase';
import Router from 'next/router';
import Navbar from '/components/Navbar';

import GoogleIcon from '@mui/icons-material/Google';
import { Fade } from 'react-awesome-reveal';

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

  const googleSignIn = () => {
    signInWithPopup(auth, google).then(async () => {
      await axios
        .post('/api/account/googleSignIn', {
          token: auth.currentUser.toJSON().stsTokenManager.accessToken,
          name: auth.currentUser.displayName,
        })
        .then(() => {
          Router.push('/');
        })
        .catch((error) => setError(error.message));
    });
  };

  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser != null) {
      Router.push('/account');
    }
  }, [auth.currentUser]);

  return (
    <Fade>
      <div>
        <Navbar navstyle={true} />
        <div className={styles.login}>
          <div className={styles.login__space}>
            <div className={styles.login__spaceForm}>
              {error ? <Alert severity="error">{error}</Alert> : ''}
              <br></br>
              <h1 className={styles.login__spaceFormTitle}>
                Bun venit! <br></br>
                Logare:
              </h1>
              <h4 className={styles.login__spaceFormSecondTitle}>
                Vă rugăm să vă logați înainte de a continua
              </h4>
              <div className={styles.login__spaceFormHorizontalLine} />
              <br></br>
              <input
                className={styles.login__spaceFormUsername}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                className={styles.login__spaceFormPassword}
                type="password"
                name="password"
                placeholder="Parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <a className={styles.button} variant="contained" onClick={signIn}>
                Continuati
              </a>
              <div className={styles.login__spaceFormHorizontalLine} />
              <a className={styles.login__withGoogle} onClick={googleSignIn}>
                Or log in with <GoogleIcon sx={{ marginLeft: '5px' }} />{' '}
              </a>
            </div>
          </div>
          <div className={styles.login__art}>
            <img
              src="/assets/login.svg"
              alt=""
              className={styles.login__artImg}
            />
          </div>
        </div>
      </div>
    </Fade>
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
          token: auth
            ? auth.currentUser.toJSON().stsTokenManager.accessToken
            : '',
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
    <Fade>
      <div>
        <Navbar navstyle={true} />
        <div className={styles.login}>
          <div className={styles.login__space}>
            <div className={styles.login__spaceForm}>
              {error ? <Alert severity="error">{error}</Alert> : ''}
              <br></br>
              <h1 className={styles.login__spaceFormTitle}>
                Bun venit! <br></br>
                Înregistrare:
              </h1>
              <h4 className={styles.login__spaceFormSecondTitle}>
                Vă rugăm să vă înregistrați înainte de a continua
              </h4>
              <div className={styles.login__spaceFormHorizontalLine} />
              <input
                className={styles.login__spaceFormUsername}
                type="text"
                name="Nume"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                className={styles.login__spaceFormUsername}
                type="text"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                className={styles.login__spaceFormPassword}
                type="password"
                name="password"
                placeholder="Parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <a className={styles.button} onClick={signUp} sx={{ margin: 0 }}>
                Continuati
              </a>
              <div className={styles.login__spaceFormHorizontalLine} />
            </div>
          </div>
          <div className={styles.login__art}>
            <img
              src="/assets/login.svg"
              alt=""
              className={styles.login__artImg}
            />
          </div>
        </div>
      </div>
    </Fade>
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
    <Fade>
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
              sx={{
                width: '95%',
                background: 'transparent',
              }}
            >
              <BottomNavigationAction label="Logare" icon={<LockOpenIcon />} />
              <BottomNavigationAction
                label="Inregistrare"
                icon={<LoginIcon />}
              />
            </BottomNavigation>
          </Box>
        </div>
      </>
    </Fade>
  );
}
