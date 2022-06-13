import {
  Alert,
  Avatar,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import styles from '../styles/Settings.module.css';
import HomeIcon from '@mui/icons-material/Home';
import { Fade } from 'react-awesome-reveal';

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
      <div className={styles.settings}>
        <div className={styles.settings__form}>
          <div className={styles.settings__formSidebar}>
            <Button href="/">
              <HomeIcon />
              &#160; Acasa
            </Button>
          </div>
          <div className={styles.settings__formContent}>
            <div className={styles.settings__formContentSettings}>
              <div className={styles.settings__formContentSettingsAccount}>
                <div
                  className={
                    styles.settings__formContentSettingsAccountSettings
                  }
                >
                  <TextField
                    id="outlined-basic"
                    label="Emailul Tau"
                    variant="outlined"
                    value="test@email.com"
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    id="outlined-basic"
                    label="Parola Noua"
                    variant="outlined"
                    type="password"
                  />
                </div>
                <div
                  className={styles.settings__formContentSettingsAccountMessage}
                >
                  <Alert severity="info">
                    Aceste date sunt necesare pentru identificarea contului si
                    pentru securitatea acestuia. Datele nu sunt publice.
                  </Alert>
                </div>
              </div>
              <br></br>
              <Divider />
              <br></br>
              <div className={styles.settings__formContentSettingsAccount}>
                <div
                  className={
                    styles.settings__formContentSettingsAccountSettings
                  }
                >
                  <TextField
                    id="outlined-basic"
                    label="Numele Tau"
                    variant="outlined"
                    value="Toma"
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    id="outlined-basic"
                    label="Prenumele Tau"
                    variant="outlined"
                    value="Aris"
                  />
                </div>
                <div
                  className={styles.settings__formContentSettingsAccountMessage}
                >
                  <Alert severity="info">
                    Aceste date sunt folosite pentru adaptarea siteului la
                    dumneavoastra. Datele nu sunt publice.
                  </Alert>
                </div>
              </div>
              <br></br>
              <Divider />
              <br></br>
              <div className={styles.settings__formContentSettingsPicker}>
                <div style={{ display: 'flex' }}>
                  <FormControl fullWidth>
                    <InputLabel>Buget</InputLabel>
                    <Select
                      value={budget}
                      label="Buget"
                      onChange={handleBudget}
                    >
                      <MenuItem value={1}>Mic</MenuItem>
                      <MenuItem value={2}>Mediu</MenuItem>
                      <MenuItem value={3}>Mare</MenuItem>
                    </Select>
                  </FormControl>
                  &#160;
                  <Alert severity="info">
                    Cunoasterea bugetului tau ne ajuta sa determinam unde poti
                    studia fara bursa.
                  </Alert>
                </div>
                <br></br>
                <div style={{ display: 'flex' }}>
                  <FormControl fullWidth>
                    <InputLabel>Locatie</InputLabel>
                    <Select
                      value={location}
                      label="Locatie"
                      onChange={handleLocation}
                    >
                      <MenuItem value={1}>Nord</MenuItem>
                      <MenuItem value={2}>Sud</MenuItem>
                      <MenuItem value={3}>Est</MenuItem>
                      <MenuItem value={3}>Vest</MenuItem>
                    </Select>
                  </FormControl>
                  &#160;
                  <Alert severity="info">
                    In care parte a tarii preferi sa studiezi?
                  </Alert>
                </div>
                <br></br>
                <div style={{ display: 'flex' }}>
                  <FormControl fullWidth>
                    <InputLabel>Medie BAC</InputLabel>
                    <Select value={bac} label="Medie BAC" onChange={handleBac}>
                      <MenuItem value={1}>5-7</MenuItem>
                      <MenuItem value={2}>8-9</MenuItem>
                      <MenuItem value={3}>9-10</MenuItem>
                      <MenuItem value={3}>10</MenuItem>
                    </Select>
                  </FormControl>
                  &#160;
                  <Alert severity="info">
                    Stiind media ta la bac te putem avertiza daca ai sanse mici
                    de intrare la o anumita facultate.
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default settings;
