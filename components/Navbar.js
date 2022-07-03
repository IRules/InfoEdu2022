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
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../lib/firebase';

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


  // Script media

  const [st, setSt] = useState('0px');

  const phoneMenu__hide = () => {
    setSt('0px');
  };

  const phoneMenu__show = () => {
    setSt('200px');
  };
  
  //

  // const user = auth.currentUser{
  // user ? <da> : <nu>
  // }

  return (
    <nav className={props.navstyle ? `${styles["nav"]} ${styles["nav__change__style"]}` : styles.nav}>
          <a href="/">
            <img src="/assets/logo.png"  className={styles.img} style=
            {{width: 130 }}/>
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
              <IconButton onClick={handleMenu} className={styles.avatar__phone}>
              <Avatar  color="primary" />
              </IconButton>
              <li className={styles.li}>
                <Link href="/">Acasă</Link>
              </li>
              <div className={styles.vertical__line} />
              <li className={styles.li}>
                <Link href="/about">Despre</Link>
              </li>
              <div className={styles.vertical__line} />
              <li className={styles.li}>
                <Link href="/contact">Contact</Link>
              </li>
              <div className={styles.vertical__line} />
              <li className={styles.li}> 
                <Link href="/dash">Login</Link>
              </li>
              <IconButton onClick={handleMenu} className={styles.avatar__pc}>
              <Avatar  color="primary" />
              </IconButton>
              <Menu
              id="basic-menu"
              anchorEl={anchorMenu}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{'aria-labelledby': 'basic-button',}}>
              <MenuItem>
                 <Link href="/settings">Settings</Link>
              </MenuItem>
              <Divider />
              <MenuItem>Logout</MenuItem>
              </Menu>
            </ul>
          </div>

          <FontAwesomeIcon
            icon={faBars}
            className={styles.fa}
            onClick={phoneMenu__show}
          />
        </nav>
    // <div className={styles.navbar}>
    //   <div className={styles.navbar__logo}>
    //     <Avatar />
    //   </div>
    //   <div className={styles.navbar__filler}></div>
    //   <div className={styles.navbar__mobile}>
    //     <IconButton onClick={handleClick}>
    //       <MenuIcon color="primary" fontSize="large" />
    //     </IconButton>
    //     <Menu
    //       id="basic-menu"
    //       anchorEl={anchorEl}
    //       open={open2}
    //       onClose={handleClose}
    //       MenuListProps={{
    //         'aria-labelledby': 'basic-button',
    //       }}
    //     >
    //       <MenuItem onClick={handleClose}>s</MenuItem>
    //       <MenuItem onClick={handleClose}>Ghid Facultate</MenuItem>
    //       <MenuItem onClick={handleClose}>Despre noi</MenuItem>
    //       <MenuItem onClick={handleClose}>Knowledgebase</MenuItem>
    //       <Divider />
    //       <MenuItem onClick={handleClose}>Register</MenuItem>
    //       <MenuItem onClick={handleClose}>Log in</MenuItem>
    //     </Menu>
    //   </div>
    //   <div className={styles.navbar__search}>
    //     <Search>
    //       <SearchIconWrapper>
    //         <SearchIcon />
    //       </SearchIconWrapper>
    //       <StyledInputBase
    //         placeholder="Search..."
    //         onChange={(e) => handleSearch(e)}
    //       />
    //     </Search>
    //   </div>
    //   <div className={styles.navbar__settings}>
    //     <IconButton onClick={handleMenu}>
    //       <Avatar sx={{ fontSize: 30 }} color="primary" />
    //     </IconButton>
    //     <Menu
    //       id="basic-menu"
    //       anchorEl={anchorMenu}
    //       open={open}
    //       onClose={handleCloseMenu}
    //       MenuListProps={{
    //         'aria-labelledby': 'basic-button',
    //       }}
    //     >
    //       <MenuItem>
    //         <Link href="/settings">Settings</Link>
    //       </MenuItem>
    //       <Divider />
    //       <MenuItem>Logout</MenuItem>
    //     </Menu>
    //   </div>
    //   <div className={styles.navbar__searchMobile}></div>
    // </div>
  );
}

export default Navbar;
