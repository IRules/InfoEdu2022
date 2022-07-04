import React, { useState } from 'react';
import styles from '../../styles/Account.module.css';
import { Fade } from 'react-awesome-reveal';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Virtuoso } from 'react-virtuoso';
import Profession from '../../components/Profession';
import HomeIcon from '@mui/icons-material/Home';
import SaveIcon from '@mui/icons-material/Save';
import { auth, firestore } from '../../lib/firebase';
import Router from 'next/router';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import axios from 'axios';
import { useDocument } from 'react-firebase-hooks/firestore';
import Link from 'next/link';

function Settings() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [budget, setBudget] = useState('');

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bac, setBac] = useState('');

  const handleBac = (event) => {
    setBac(event.target.value);
  };

  const updateUsername = async () => {
    await axios.post('/api/account/updateName', {
      name: name,
      token: auth.currentUser.toJSON().stsTokenManager.accessToken,
    });
  };

  const updatePreferences = async () => {
    if (value.length == 120) {
      await axios.post('/api/account/updatePreferences', {
        buget: budget,
        medieBac: bac,
        token: auth.currentUser.toJSON().stsTokenManager.accessToken,
      });
    }
  };

  const [persComoponent, setPersComoponent] = useState(
    <div className={styles.settings__containerTestProfessions}>
      <h1>Personalitate: Investigativ</h1>
      <p>
        Îi place să rezolve sarcini abstracte, să înţeleagă şi să organizeze
        lumea. Are abilităţi matematice, ştiinţifice, este analitic şi curios.
        Nu îi plac regulile şi nici să lucreze în echipă. Este original şi
        creativ. Se îndreaptă spre domenii care implică cercetare şi
        investigare.
      </p>
      <br></br>
      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Posibile profesii
      </h2>
      <p>- informatician</p>
      <p>- economist</p>
      <p>- consultant management</p>
      <p>- chimist, biolog, fizician </p>
      <p>- antropolog</p>
      <p>- farmacist</p>
      <p>- psiholog</p>
      <p>- bijutier</p>
      <p>- inginer de sistem</p>
      <p>- geograf, geolog</p>
    </div>
  );

  const [personalitaties, setPersonalities] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser == null) {
        Router.push('/account/auth');
      }
      setEmail(auth.currentUser.email);
      getDoc(doc(firestore, 'users', `${auth.currentUser.uid}`)).then(
        (user) => {
          setName(user.data().name);
          setBac(user.data().medieBac);
          setBudget(user.data().buget);
          setPersonalities(user.data().personality);
        }
      );
    }, 1000);
  }, [auth.currentUser]);

  return (
    <Fade>
      <div className={styles.settings}>
        <Navbar navstyle={true} />
        <div className={styles.settings__container}>
          <div className={styles.settings__containerAccount}>
            <div className={styles.settings__containerAccountPfp}>
              <Avatar
                sx={{ width: 126, height: 126 }}
                src={`https://robohash.org/${email}?set=set4`}
              />
            </div>
            <div className={styles.settings__containerAccountName}>
              <TextField
                id="outlined-basic"
                label="Nume"
                value={name}
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.settings__containerAccountInfo}>
              <Alert severity="info" sx={{ ml: '20px' }}>
                Numele este utilizat pentru sectiunea de comentarii si cea de
                chat.
              </Alert>
              <br></br>
              <br></br>
              <Button
                onClick={() => {
                  updateUsername();
                }}
                variant="contained"
                style={{
                  marginLeft: '20px',
                  width: '200px',
                }}
                color="primary"
              >
                Salveaza numele
              </Button>
            </div>
          </div>

          <div className={styles.settings__containerPreferences}>
            <Alert severity="info" sx={{ ml: '20px' }}>
              Setand aceste preferinte vei primi avertizari depsre facultati la
              care nu te incadrezi.
            </Alert>
            <FormControl fullWidth>
              <InputLabel>Buget</InputLabel>
              <Select value={budget} label="Buget" onChange={handleBudget}>
                <MenuItem value={'mic'}>Mic</MenuItem>
                <MenuItem value={'mediu'}>Mediu</MenuItem>
                <MenuItem value={'mare'}>Mare</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Medie BAC</InputLabel>
              <Select value={bac} label="Medie BAC" onChange={handleBac}>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              style={{ marginLeft: '20px', width: '200px' }}
              onClick={() => {
                updatePreferences();
              }}
              color="primary"
            >
              Salveaza preferintele
            </Button>
          </div>

          <div className={styles.settings__containerTest}>
            <div className={styles.settings__containerTestInfo}>
              <Alert severity="info">
                Aici gaseti o lista de cariere recomandate bazate pe un test de
                personalitate.
              </Alert>
            </div>
            {persComoponent}
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Settings;
