import { Box, Rating } from '@mui/material';
import React from 'react';
import styles from '../styles/Review.module.css';

function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.review__title}>
        <Box sx={{ ml: 2 }}>Aris Toma</Box>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
      </div>
      <div className={styles.review__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
        ultricies lacus. Nulla congue cursus libero, sed hendrerit turpis
        efficitur id. Sed neque magna, ultricies vel mauris a, cursus molestie
        elit. Phasellus et sapien sit amet sapien dictum tempor. Suspendisse vel
        purus vehicula lacus feugiat sollicitudin ac a nulla. In maximus mi eget
        augue malesuada, non imperdiet turpis bibendum. Duis ac finibus lacus.
        Sed eleifend finibus nunc, ut aliquam dolor hendrerit id. Sed lorem
        metus, aliquam at sodales vitae, placerat at mi. Donec finibus metus et
        vehicula tincidunt. Maecenas in leo tempus, semper lacus vel, rutrum
        erat. Nullam ac felis eros. Aenean at tristique velit.
      </div>
    </div>
  );
}

export default Review;
