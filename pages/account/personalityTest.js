import {
  Alert,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
} from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { auth, firestore } from '../../lib/firebase';
import styles from '../../styles/PersonalityTest.module.css';
import Router from 'next/router';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Footer from '../../components/Fotter';

function PersonalityTest() {
  const value = [];
  let [intrebari, setIntrebari] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) {
        getDoc(doc(firestore, 'personalityTest', 'questions')).then((doc) => {
          if (doc.exists) {
            setIntrebari(doc.data().questions);
          }
        });
      } else {
        Router.push('/account/auth');
      }
    }, 1000);
  }, []);

  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async () => {
    if (value.length === 120) {
      await axios
        .post('/api/account/submitPersonalityTest', {
          values: value,
          token: auth.currentUser.toJSON().stsTokenManager.accessToken,
        })
        .then((res) => {
          Router.push('/account');
        })
        .catch((err) => {
          setError(err.response.data.message);
          setOpen(true);
        });
    } else {
      setError('You must answer all questions!');
      setOpen(true);
    }
  };
  return (
    <Fade>
      <>
        <div className={styles.personalityTest}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
          <Navbar navstyle={true} />
          <div className={styles.personalityTest__container}>
            <Alert
              severity="info"
              sx={{
                marginTop: '1rem',
                height: '90px',
              }}
            >
              Tot ce trebuie să faceţi este să răspundeţi la următoarele 120 de
              întrebări, care încep cu „Ţi-ar plăcea să…?”
            </Alert>
            <br></br>
            {intrebari &&
              intrebari.map((intrebare, index) => {
                return (
                  <div key={index + 1}>
                    <p>{intrebare}</p>
                    <RadioGroup
                      row
                      value={value[index]}
                      onChange={(e) => {
                        value[index + 1] = parseInt(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="Da, mi-ar placea"
                      />
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="Imi este indiferent"
                      />
                      <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="Nu mi-ar placea"
                      />
                    </RadioGroup>
                  </div>
                );
              })}
            <br></br>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(value);
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </div>
          <br></br>
        </div>
      </>
      <Footer />
    </Fade>
  );
}

export default PersonalityTest;
