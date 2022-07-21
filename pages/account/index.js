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
    await axios.post('/api/account/updatePreferences', {
      buget: budget,
      medieBac: bac,
      token: auth.currentUser.toJSON().stsTokenManager.accessToken,
    });
  };

  const [persComoponent, setPersComoponent] = useState(null);

  const [personality, setPersonality] = useState(0);

  useEffect(() => {
    setTimeout(async () => {
      if (auth.currentUser == null) {
        Router.push('/account/auth');
      }
      setEmail(auth.currentUser.email);
      await getDoc(doc(firestore, 'users', `${auth.currentUser.uid}`)).then(
        (user) => {
          setName(user.data().name);
          setBac(user.data().medieBac);
          setBudget(user.data().buget);
          setPersonality(user.data().personality);
        }
      );
    }, 1000);
  }, [auth.currentUser]);

  useEffect(() => {
    setTimeout(async () => {
      if (personality === 0) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Da testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 1) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Realist</h1>
              <p>
                Este caracterizat prin tendinţa de a se îndrepta spre activităţi
                care presupun manipularea obiectelor, instrumentelor, maşinilor;
                are ingeniozitate tehnică şi spirit practic. Îi plac
                activităţile în aer liber, are dificultăţi în a-şi exprima
                sentimentele, îi place să construiască şi să repare.
              </p>
              <br></br>
              <h2
                style={{
                  fontWeight: 'bold',
                }}
              >
                Posibile profesii
              </h2>
              <p>- inginer mecanic</p>
              <p>- optician</p>
              <p>- poliţist</p>
              <p>- constructor </p>
              <p>- arheolog</p>
              <p>- tâmplar</p>
              <p>- tehnician dentar</p>
              <p>- bijutier</p>
              <p>- electrician</p>
              <p>- instalator</p>
            </div>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 2) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Investigativ</h1>
              <p>
                Îi place să rezolve sarcini abstracte, să înţeleagă şi să
                organizeze lumea. Are abilităţi matematice, ştiinţifice, este
                analitic şi curios. Nu îi plac regulile şi nici să lucreze în
                echipă. Este original şi creativ. Se îndreaptă spre domenii care
                implică cercetare şi investigare.
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
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 3) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Artistic</h1>
              <p>
                Este caracterizat de imaginaţie, creativitate, atras de
                activităţi mai puţin structurate, care îi lasă posibilitatea de
                a se exprima. E sensibil, preferă să lucreze singur, are nevoie
                de comunicare individuală. Preferă relaţionarea indirectă, prin
                exprimarea artistică.
              </p>
              <br></br>
              <h2
                style={{
                  fontWeight: 'bold',
                }}
              >
                Posibile profesii
              </h2>
              <p>- actor</p>
              <p>- arhitect</p>
              <p>- fotograf</p>
              <p>- profesor de teatru, dans </p>
              <p>- designer în publicitate</p>
              <p>- designer de modă</p>
              <p>- designer de interioare</p>
              <p>- editor</p>
              <p>- jurnalist</p>
            </div>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 4) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Social</h1>
              <p>
                Este interesat de activităţi care implică relaţionarea
                interpersonală. Îi place să i se acorde atenţie. Are deprinderi
                verbale, sociale, este cooperant şi generos. E atras de
                activităţi care presupun informarea, pregătirea, dezvoltarea.
              </p>
              <br></br>
              <h2
                style={{
                  fontWeight: 'bold',
                }}
              >
                Posibile profesii
              </h2>
              <p>- profesor</p>
              <p>- psiholog</p>
              <p>- asistent medical</p>
              <p>- medic</p>
              <p>- asistent social</p>
              <p>- logoped</p>
              <p>- mass-media</p>
              <p>- poliţist</p>
            </div>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 5) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Întreprizător</h1>
              <p>
                Preferă lucrul în echipă, mai ales cu scopul de a conduce, de a
                ocupa locul de lider. Are dorinţa de putere, de statut social,
                are abilităţi de comunicare şi ştie să se facă înţeles. Este
                entuziast şi încrezător în sine.
              </p>
              <br></br>
              <h2
                style={{
                  fontWeight: 'bold',
                }}
              >
                Posibile profesii
              </h2>
              <p>- manager</p>
              <p>- manager</p>
              <p>- manager</p>
              <p>- procuror </p>
              <p>- relaţii cu publicul</p>
              <p>- agent de asigurăr</p>
              <p>- jurnalist</p>
              <p>- agent de turism</p>
            </div>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      } else if (personality === 6) {
        setPersComoponent(
          <>
            <div className={styles.settings__containerTestProfessions}>
              <h1>Personalitate: Convenţional</h1>
              <p>
                Este stabil, are respect faţă de reguli. Preferă activităţile
                care solicită manipularea ordonată, sistematizarea datelor,
                informaţiilor. Are abilităţi de secretariat, matematice. Atent
                la detalii. Vrea să ştie ce se aşteaptă de la el.
              </p>
              <br></br>
              <h2
                style={{
                  fontWeight: 'bold',
                }}
              >
                Posibile profesii
              </h2>
              <p>- contabil</p>
              <p>- casier</p>
              <p>- analist financiar</p>
              <p>- secretara </p>
              <p>- bibliotecar</p>
              <p>- operator telefonie</p>
              <p>- operator calculator</p>
              <p>- asistent administrativ</p>
            </div>
            <div className={styles.settings__containerButtons}>
              <Link href="/account/personalityTest">
                <Button variant="contained" color="primary">
                  Reda testul de profesie
                </Button>
              </Link>
            </div>
          </>
        );
      }
    }, 0);
  }, [personality]);

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
              Setand aceste preferinte vei primi avertizari despre facultati la
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
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Settings;
