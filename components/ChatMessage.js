import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/ChatMessage.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { auth } from '../lib/firebase';
import axios from 'axios';

function ChatMessage(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) {
        axios
          .post('/api/admin/isAdmin/', {
            token: auth.currentUser.toJSON().stsTokenManager.accessToken,
          })
          .then((res) => {
            if (res.data.isAdmin) {
              setIsAdmin(true);
            }
          });
      }
    }, 1000);
  }, [auth.currentUser]);

  const deleteMessage = () => {
    axios.post(`/api/admin/deleteMessage`, {
      createdAt: props.createdAt,
      slug: props.slug,
      token: auth.currentUser.toJSON().stsTokenManager.accessToken,
    });
  };

  const banUser = () => {
    axios.post(`/api/admin/banUser`, {
      user: props.uid,
      token: auth.currentUser.toJSON().stsTokenManager.accessToken,
    });
  };

  return (
    <div className={styles.chatMessage}>
      <span data-testid="tail-in" data-icon="tail-in">
        <svg viewBox="0 0 8 13" width="8" height="13">
          <path
            opacity=".13"
            fill="#9fa2a8"
            d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
          ></path>
          <path
            fill="#9fa2a8"
            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
          ></path>
        </svg>
      </span>
      <div className={styles.chatMessage__bubble}>
        <div className={styles.chatMessage__bubbleTitle}>
          {props.name}
          {isAdmin ? (
            <IconButton onClick={handleClick}>
              <MoreVertIcon sx={{ fontSize: 15 }} />
            </IconButton>
          ) : (
            <></>
          )}
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
            <MenuItem onClick={deleteMessage}>Sterge mesajul</MenuItem>
          </Menu>
        </div>
        {props.text}
      </div>
    </div>
  );
}

export default ChatMessage;
