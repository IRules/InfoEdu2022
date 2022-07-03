import React, { useState } from 'react';
import styles from '../../styles/Settings.module.css';
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
import { useDocument } from 'react-firebase-hooks/firestore';

function Settings() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser == null) {
        Router.push('/account/auth');
      }
      setEmail(auth.currentUser.email);
      getDoc(doc(firestore, 'users', `${auth.currentUser.uid}`)).then(
        (user) => {
          console.log(user.data());
          setName(user.data().name);
        }
      );
      return (
        <Fade>
          <Navbar navstyle={true} />
          <div className={styles.settings}>
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
                    Aceste date sunt utilizte pentru sectiunea de comentarii si
                    cea de chat.
                  </Alert>
                </div>
              </div>

              <div className={styles.settings__containerPreferences}>
                <Alert severity="info" sx={{ ml: '20px' }}>
                  Aceste date sunt preluate din contul tau google.
                </Alert>
                <FormControl fullWidth>
                  <InputLabel>Buget</InputLabel>
                  <Select value={budget} label="Buget" onChange={handleBudget}>
                    <MenuItem value={1}>Mic</MenuItem>
                    <MenuItem value={2}>Mediu</MenuItem>
                    <MenuItem value={3}>Mare</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Medie BAC</InputLabel>
                  <Select value={bac} label="Medie BAC" onChange={handleBac}>
                    <MenuItem value={1}>5-7</MenuItem>
                    <MenuItem value={2}>8-9</MenuItem>
                    <MenuItem value={3}>9-10</MenuItem>
                    <MenuItem value={4}>10</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={styles.settings__containerTest}>
                <div className={styles.settings__containerTestInfo}>
                  <Alert severity="info">
                    Pe aceasta pagina se regasesc informatii despre testul de
                    cariera.
                  </Alert>
                </div>
                <div className={styles.settings__containerTestProfessions}>
                  <h1>Profesii:</h1>
                  <Virtuoso
                    className={styles.settings__containerTestProfessions}
                    style={{ height: '400px' }}
                    totalCount={10}
                    itemContent={(index) => <Profession />}
                  />
                </div>
                <div className={styles.settings__containerButtons}>
                  <Button variant="contained">Reda testul de profesie</Button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      );
    }, 100);
  }, [auth.currentUser]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [budget, setBudget] = useState('');

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [location, setLocation] = useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bac, setBac] = useState('');

  const handleBac = (event) => {
    setBac(event.target.value);
  };
}

export default Settings;
