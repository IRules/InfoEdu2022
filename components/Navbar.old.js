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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const open = Boolean(anchorMenu);
  const handleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'fixed',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f1f2f3',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#f1f2f3',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '80ch',
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Avatar />
      </div>
      <div className={styles.navbar__filler}></div>
      <div className={styles.navbar__mobile}>
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
          <MenuItem onClick={handleClose}>s</MenuItem>
          <MenuItem onClick={handleClose}>Ghid Facultate</MenuItem>
          <MenuItem onClick={handleClose}>Despre noi</MenuItem>
          <MenuItem onClick={handleClose}>Knowledgebase</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Register</MenuItem>
          <MenuItem onClick={handleClose}>Log in</MenuItem>
        </Menu>
      </div>
      <div className={styles.navbar__search}>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            onChange={(e) => handleSearch(e)}
          />
        </Search> */}
      </div>
      <div className={styles.navbar__settings}>
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
            <Link href="/settings">Settings</Link>
          </MenuItem>
          <Divider />
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
      <div className={styles.navbar__searchMobile}></div>
    </div>
  );
}

export default Navbar;
