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

  const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser) {
        setUser(true);
      }
    }, 1000);
  }, [auth.currentUser]);

  const [search, setSearch] = useState('');
  const [searchWidth, setSearchWidth] = useState('30vw');
  return (
    <Fade>
      <div className={styles.facultati}>
        <Navbar navstyle={true} />
        <div className={styles.facultati__lista}>
          <List searchValue={search.current}></List>
        </div>
      </div>
    </Fade>
  );
}
