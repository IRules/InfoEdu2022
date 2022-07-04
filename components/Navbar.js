import {
  alpha,
  Avatar,
  Divider,
  Icon,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../lib/firebase';
import Router from 'next/router';
import axios from 'axios';

function Navbar(props) {
  // Menu

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const open = Boolean(anchorMenu);
  const handleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const signOut = (e) => {
    auth.signOut();
    setAnchorMenu(null);
    setUser(false);
    Router.push('/');
  };

  // Script media

  const [st, setSt] = useState('0px');

  const phoneMenu__hide = () => {
    setSt('0px');
  };

  const phoneMenu__show = () => {
    setSt('200px');
  };

  const [user, setUser] = useState(false);

  const [myToken, setToken] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      if (auth.currentUser) {
        await axios
          .post(`/api/admin/isAdmin/`, {
            token: auth.currentUser.toJSON().stsTokenManager.accessToken,
          })
          .then((res) => {
            if (res.data.isAdmin) {
              setIsAdmin(true);
            }
          });
      }
    }, 1500);
  }, [auth.currentUser]);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) {
        setUser(true);
      }
    }, 1000);
  }, [auth.currentUser]);
  return (
    <nav
      className={
        props.navstyle
          ? `${styles['nav']} ${styles['nav__change__style']}`
          : styles.nav
      }
    >
      <a href="/">
        <img
          src="/assets/logo.png"
          className={styles.img}
          style={{ width: 130 }}
        />
      </a>
      <div
        className={styles.nav_links}
        id="navlinks"
        style={{ marginRight: st }}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.fa}
          onClick={phoneMenu__hide}
        />
        <ul className={styles.ul}>
          {user ? (
            <>
              <div
                className={user ? styles.avatar__phone : styles.display__none}
              >
                <IconButton onClick={handleMenu}>
                  <Avatar
                    color="primary"
                    src={`https://robohash.org/${auth.currentUser.email}?set=set4`}
                    sx={{ bgcolor: '#f1f2f3' }}
                  />
                </IconButton>
              </div>
            </>
          ) : (
            <></>
          )}
          <li className={styles.li}>
            <Link href="/">Acasă</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/facultati  ">Facultati</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/about">Despre</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/contact">Contact</Link>
          </li>
          {user ? (
            <>
              <div className={user ? styles.avatar__pc : styles.display__none}>
                <IconButton onClick={handleMenu}>
                  <Avatar
                    color="primary"
                    src={`https://robohash.org/${auth.currentUser.email}?set=set4`}
                    sx={{ bgcolor: '#f1f2f3' }}
                  />
                </IconButton>
              </div>
            </>
          ) : (
            <>
              <div className={styles.vertical__line} />
              <li className={styles.li}>
                <Link href="/account/auth">Logare</Link>
              </li>
            </>
          )}
          {isAdmin ? (
            <Menu
              id="basic-menu"
              anchorEl={anchorMenu}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              sx={{
                zIndex: '9999999',
              }}
            >
              <MenuItem>
                <Link href="/account">Contul meu</Link>
              </MenuItem>
              <MenuItem onClick={signOut}>Delogare</MenuItem>
              <Divider />
              <MenuItem>
                <Link href="/admin">Panou admin</Link>
              </MenuItem>
            </Menu>
          ) : (
            <Menu
              id="basic-menu"
              anchorEl={anchorMenu}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              sx={{
                zIndex: '9999999',
              }}
            >
              <MenuItem>
                <Link href="/account">Contul meu</Link>
              </MenuItem>
              <MenuItem onClick={signOut}>Delogare</MenuItem>
            </Menu>
          )}
        </ul>
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className={styles.fa}
        onClick={phoneMenu__show}
      />
    </nav>
  );
}

export default Navbar;
