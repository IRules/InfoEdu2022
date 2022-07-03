import { Box, Rating } from '@mui/material';
import React from 'react';
import styles from '../styles/Review.module.css';

function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.review__title}>
        <Box sx={{ ml: 2 }}>{props.name}</Box>
        <Rating
          name="read-only"
          value={props.rating}
          precision={0.1}
          readOnly
        />
      </div>
      <div className={styles.review__text}>{props.text}</div>
    </div>
  );
}

export default Review;
