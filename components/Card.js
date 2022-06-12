import { Block } from '@mui/icons-material';
import { Alert, Avatar, Button, Link, Tooltip } from '@mui/material';
import React from 'react';
import styles from '../styles/Card.module.css';
import PlaceIcon from '@mui/icons-material/Place';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ErrorIcon from '@mui/icons-material/Error';

function Card() {
  return (
    <Link href="/facultati/ubbcluj">
      <div className={styles.card}>
        <div className={styles.card__image}>
          <div className={styles.card__imageSelector}>
            <div className={styles.card__imageSelectorTag}>
              <LocalOfferIcon fontSize="small"></LocalOfferIcon>
              &#160; Multiple facultati
            </div>
          </div>
        </div>
        <div className={styles.card__text}>
          <Avatar
            variant="rounded"
            src="https://yt3.ggpht.com/ytc/AKedOLTw4UuhjdclbzQRMkfHSwDDPCPxRjdWfTKOtHbjRg=s900-c-k-c0x00ffffff-no-rj"
          ></Avatar>
          <div className={styles.card__textBox}>
            <div className={styles.card__textBoxTitle}>
              Universitatea Babeș-Bolyai
            </div>
            <div className={styles.card__textBoxLocation}>
              <PlaceIcon />
              Cluj-Napoca &#160;&#160;&#160;
              <Tooltip title="Facultatea aceasta nu se afla in zona ta preferata!">
                <ErrorIcon sx={{ color: '#ff0000' }} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
