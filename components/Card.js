import { Block } from '@mui/icons-material';
import { Alert, Avatar, Button, Link, Tooltip } from '@mui/material';
import React from 'react';
import styles from '../styles/Card.module.css';
import PlaceIcon from '@mui/icons-material/Place';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ErrorIcon from '@mui/icons-material/Error';
import axios from 'axios';

function Card(props) {
  const handleAnalytics = async (e) => {
    axios.post('/api/analytics', {
      pid: props.pid,
    });
  };
  return (
    <Link href={`/facultati/${props.pid}`} onClick={handleAnalytics}>
      <div className={styles.card}>
        <div
          className={styles.card__image}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div className={styles.card__imageSelector}>
            {props.multipleFac === 'da' ? (
              <div className={styles.card__imageSelectorTag}>
                <LocalOfferIcon fontSize="small"></LocalOfferIcon>
                &#160; Multiple facultati
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.card__text}>
          <Avatar variant="rounded" src={props.emblem}></Avatar>
          <div className={styles.card__textBox}>
            <div className={styles.card__textBoxTitle}>{props.title}</div>
            <div className={styles.card__textBoxLocation}>
              <PlaceIcon />
              {props.loc} &#160;&#160;&#160;
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
