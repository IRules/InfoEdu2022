import { Box, IconButton, Menu, MenuItem, Rating } from '@mui/material';
import React from 'react';
import styles from '../styles/Review.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

function Review(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteMessage = () => {
    axios.post(`/api/admin/deleteReview`, {
      createdAt: props.createdAt,
      slug: props.slug,
    });
  };

  const banUser = () => {
    axios.post(`/api/admin/banUser`, {
      user: props.uid,
    });
  };

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
        <IconButton onClick={handleClick}>
          <MoreVertIcon sx={{ fontSize: 15 }} />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={banUser}>Baneaza utilizatorul</MenuItem>
          <MenuItem onClick={deleteMessage}>Sterge review</MenuItem>
        </Menu>
      </div>
      <div className={styles.review__text}>{props.text}</div>
    </div>
  );
}

export default Review;
