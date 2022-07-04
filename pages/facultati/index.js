import {
  alpha,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Icon,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Facultati.module.css';
import RestoreIcon from '@mui/icons-material/Restore';
import { useEffect, useReducer, useRef, useState } from 'react';
import FunctionsIcon from '@mui/icons-material/Functions';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TranslateIcon from '@mui/icons-material/Translate';
import List from '../../components/List';
import { Fade } from 'react-awesome-reveal';

import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { auth } from '../../lib/firebase';

export default function Facultati() {
  const [value, setValue] = useState('Recente');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorMenu, setAnchorMenu] = useState(null);
  const open = Boolean(anchorMenu);
  const handleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e);
    console.log(search);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState(false);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) {
        setUser(true);
      }
      console.log(auth.currentUser);
    }, 1000);
  }, [auth.currentUser]);

  useEffect(() => {}, [search.current]);
  return (
    <Fade>
      <div className={styles.app}>
        <div className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <Avatar />
          </div>
          <div className={styles.navbar__filler}></div>
          <div className={styles.navbar__search}>
            <div class="search">
              <div class="icon"></div>

              <div class="input">
                <input type="text" placeholder="Search..." id="mysearch" />
              </div>

              <span
                class="clear"
                onclick="document.getElementById('mysearch').value = ''"
              ></span>
            </div>
          </div>
          <div className={styles.navbar__settings}>
            <IconButton onClick={handleClick}>
              <MenuIcon color="primary" fontSize="large" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open2}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/">Acasa</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/about">Despre</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/contact">Contact</Link>
              </MenuItem>
              {user ? <></> : <MenuItem onClick={handleClose}>Logare</MenuItem>}
            </Menu>
            <IconButton onClick={handleMenu}>
              <Avatar sx={{ fontSize: 30 }} color="primary" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorMenu}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>
                <Link href="/account">Contul meu</Link>
              </MenuItem>
              <Divider />
              <MenuItem>Delogare</MenuItem>
            </Menu>
          </div>
          <div className={styles.navbar__searchMobile}></div>
        </div>
        <div className={styles.app__categories}>
          <BottomNavigation
            sx={{
              backgroundColor: '#F06539',
              height: '5vh',
            }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              value="Recente"
              icon={<div>{search.current}</div>}
            />
            <BottomNavigationAction
              value="Recente1"
              icon={<div>Fizicas</div>}
            />
            <BottomNavigationAction value="Recente1" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recente2" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recente3" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recent4" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recent5" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recent6" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recente7" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recente8" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recent9" icon={<div>Fizica</div>} />
            <BottomNavigationAction value="Recent20" icon={<div>Fizica</div>} />
            <BottomNavigationAction
              value="Recent23"
              icon={<div>Fizicas</div>}
            />
          </BottomNavigation>
        </div>
        <List searchValue={search.current} key={1}></List>
      </div>
    </Fade>
  );
}
