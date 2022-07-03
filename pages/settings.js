import React, { useState } from 'react';
import styles from '../styles/Settings.module.css';
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
import Profession from '../components/Profession';
import HomeIcon from '@mui/icons-material/Home';
import SaveIcon from '@mui/icons-material/Save';

function settings() {
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
  return (
    <Fade>
      <div className={styles.settings__navbar}>
        <div className={styles.settings__navbarBack}>
          <Button color="secondary">
            <HomeIcon /> Acasa
          </Button>
        </div>
        <div className={styles.settings__navbarFiller}></div>
        <div className={styles.settings__navbarSave}>
          <Button color="secondary">
            <SaveIcon /> Salveaza Setari
          </Button>
        </div>
      </div>
      <div className={styles.settings}>
        <div className={styles.settings__container}>
          <div className={styles.settings__containerAccount}>
            <div className={styles.settings__containerAccountPfp}>
              <Avatar sx={{ width: 126, height: 126 }} />
            </div>
            <div className={styles.settings__containerAccountName}>
              <TextField id="outlined-basic" label="Nume" variant="outlined" />
              <br></br>
              <br></br>
              <TextField
                id="outlined-basic"
                label="Prenume"
                variant="outlined"
              />
            </div>
            <div className={styles.settings__containerAccountInfo}>
              <Alert severity="info" sx={{ ml: '20px' }}>
                Aceste date sunt utilizte pentru sectiunea de comentarii si cea
                de chat.
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
            <FormControl fullWidth>
              <InputLabel>Domeniul de studiu</InputLabel>
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
}

export default settings;
