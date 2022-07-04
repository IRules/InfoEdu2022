import {
  Autocomplete,
  Avatar,
  Button,
  IconButton,
  Rating,
  Snackbar,
  TextField,
} from '@mui/material';
import axios from 'axios';
import {
  collection,
  doc,
  getDoc,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import ChatMessage from '../../components/ChatMessage';
import Review from '../../components/Review';
import { auth, firestore } from '../../lib/firebase';
import styles from '../../styles/Facultate.module.css';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../../components/Navbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

import PlaceIcon from '@mui/icons-material/Place';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Facultate = () => {
  const dummy = useRef();
  const router = useRouter();
  const { pid } = router.query;

  const [message, setMessage] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0.1);
  const [token, setToken] = useState('');

  const [reviews] = useCollectionData(
    query(
      collection(firestore, 'facultati', `${pid}`, 'reviews'),
      orderBy('rating', 'desc')
    )
  );

  const handleSendMessage = async (e) => {
    e.preventDefault();
    axios.post('/api/sendMessage', {
      message: message,
      createdAt: new Date(),
      slug: pid,
      token: token,
    });
    setMessage('');
  };

  const handleSendReview = async (e) => {
    e.preventDefault();
    axios.post('/api/sendReview', {
      token: token,
      review: reviewText,
      rating: reviewRating,
      createdAt: new Date(),
      slug: pid,
    });
    setReviewRating(0.1);
    setReviewText('');
  };
  const [chat] = useCollectionData(
    query(
      collection(firestore, 'facultati', `${pid}`, 'chat'),
      orderBy('createdAt', 'asc'),
      limit(25)
    )
  );

  const [facultate] = useDocument(doc(firestore, 'facultati', `${pid}`));

  const [cover, setCover] = useState('');
  const [emblem, setEmblem] = useState('');
  const [name, setName] = useState('');
  const [sumReviews, setSumReviews] = useState(0);
  const [nrReviews, setNrReviews] = useState(0);
  const [desc, setDesc] = useState('');
  const [facultati, setFacultati] = useState([]);
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (facultate) {
      setTimeout(() => {
        setCover(facultate.data().cover);
        setEmblem(facultate.data().emblem);
        setName(facultate.data().name);
        setSumReviews(facultate.data().sumReviews);
        setNrReviews(facultate.data().nrReviews);
        setDesc(facultate.data().desc);
        setFacultati(facultate.data().facultati);
        setWebsite(facultate.data().website);
        setEmail(facultate.data().email);
        setLocation(facultate.data().loc);
        setPhone(facultate.data().phone);
        auth.currentUser.getIdToken(true).then(function (idToken) {
          setToken(idToken);
        });
      }, 10);
    }
  }, [facultate]);

  return (
    <>
      <Navbar navstyle={true} />
      <div className={styles.facultate}>
        <div
          className={styles.facultate__image}
          style={{ backgroundImage: `url("${cover}")` }}
        ></div>
        <div className={styles.facultate__info}>
          <div className={styles.facultate__infoDescription}>
            <div className={styles.facultate__infoDescriptionTitle}>
              <Avatar
                variant="rounded"
                src={emblem}
                sx={{ width: 68, height: 68 }}
              ></Avatar>
              <div className={styles.facultate__infoDescriptionTitleText}>
                {name}
                <Rating
                  name="read-only"
                  value={sumReviews / nrReviews}
                  precision={0.1}
                  readOnly
                />
              </div>
            </div>
            <p className={styles.facultate__infoDescriptionText}>{desc}</p>
          </div>
          <div className={styles.facultate__infoReviews}>
            <div className={styles.facultate__infoReviewsContainer}>
              {reviews &&
                reviews.map((rev) => (
                  <Review
                    key={rev.id + Math.random()}
                    name={rev.name}
                    rating={rev.rating}
                    text={rev.text}
                    slug={pid}
                    uid={rev.uid}
                    createdAt={rev.createdAt}
                  />
                ))}
            </div>
            <div className={styles.facultate__infoReviewsSubmit}>
              <TextField
                fullWidth
                label="Scrie un review"
                multiline
                rows={5}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div className={styles.facultate__infoReviewsSubmitButton}>
                <Rating
                  name="half-rating"
                  defaultValue={parseFloat(reviewRating)}
                  value={parseFloat(reviewRating)}
                  precision={0.1}
                  onChange={(e, value) => setReviewRating(value)}
                  color="secondary"
                />
                &#160;&#160;&#160;&#160;
                <Button
                  variant="contained"
                  onClick={handleSendReview}
                  color="primary"
                >
                  Submit Review
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.facultate__bottom}>
          <div className={styles.facultate__bottomChat}>
            <div className={styles.facultate__bottomChatTexts}>
              {chat &&
                chat.map((mes) => (
                  <ChatMessage
                    key={mes.id + Math.random()}
                    name={mes.name}
                    text={mes.msg}
                    createdAt={mes.createdAt}
                    slug={pid}
                    uid={mes.uid}
                  />
                ))}
              <div ref={dummy}></div>
            </div>
            <div className={styles.facultate__bottomChatInput}>
              <TextField
                fullWidth
                label="Chat public"
                multiline
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                color="primary"
              />
              <div className={styles.facultate__bottomChatInputButton}>
                <Button
                  variant="contained"
                  onClick={(e) => handleSendMessage(e)}
                >
                  Trimite mesaj
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.facultate__bottomInfo}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={facultati}
              sx={{ width: 300 }}
              value="Facultati"
              renderInput={(params) => (
                <TextField {...params} label="Facultati" />
              )}
            ></Autocomplete>
            <h2>
              <AddIcCallIcon />
              Numar de telefon: {phone}
            </h2>
            <h2>
              <ContactMailIcon /> Email de contact: {email}
            </h2>
            <h2>
              <PlaceIcon />
              Locatie: {location}
            </h2>
            <Link href={`${website}`}>
              <Button variant="contained" color="primary">
                Viziteaza website: {website}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facultate;
