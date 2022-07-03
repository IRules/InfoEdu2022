import { Avatar, Button, Rating, TextField } from '@mui/material';
import { collection, doc, getDoc, query } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import ChatMessage from '../../components/ChatMessage';
import Review from '../../components/Review';
import { firestore } from '../../lib/firebase';
import styles from '../../styles/Facultate.module.css';

const Facultate = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [reviews] = useCollectionData(
    query(collection(firestore, 'facultati'))
  );

  const [chat] = useCollectionData(query(collection(firestore, 'facultati')));

  const [facultate] = useDocument(doc(firestore, 'facultati', `${pid}`));

  console.log(facultate);

  const [cover, setCover] = useState('');
  const [emblem, setEmblem] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (facultate) {
      setTimeout(() => {
        setCover(facultate.data().cover);
        setEmblem(facultate.data().emblem);
        setName(facultate.data().name);
        setRating(facultate.data().rating);
        setDesc(facultate.data().desc);
      }, 10);
    }
  }, [facultate]);

  return (
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
                value={rating}
                precision={0.1}
                readOnly
              />
            </div>
          </div>
          <p className={styles.facultate__infoDescriptionText}>{desc}</p>
        </div>
        <div className={styles.facultate__infoReviews}>
          <div className={styles.facultate__infoReviewsContainer}>
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
          <div className={styles.facultate__infoReviewsSubmit}>
            <TextField
              fullWidth
              label="Scrie un review"
              color="secondary"
              multiline
              rows={5}
              maxRows={5}
            />
            <div className={styles.facultate__infoReviewsSubmitButton}>
              <Rating name="half-rating" defaultValue={0.5} precision={0.5} />
              <Button variant="contained">Submit Review</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.facultate__bottom}>
        <div className={styles.facultate__bottomChat}>
          <div className={styles.facultate__bottomChatTexts}>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
          </div>
          <div className={styles.facultate__bottomChatInput}>
            <TextField
              fullWidth
              label="Scrie un review"
              color="secondary"
              multiline
              rows={2}
              maxRows={2}
            />
            <div className={styles.facultate__bottomChatInputButton}>
              <Button variant="contained">Trimite mesaj</Button>
            </div>
          </div>
        </div>
        <div className={styles.facultate__bottomInfo}></div>
      </div>
    </div>
  );
};

export default Facultate;
