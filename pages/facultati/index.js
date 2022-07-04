import Navbar from '../../components/Navbar';
import styles from '../../styles/Facultati.module.css';
import { useEffect, useState } from 'react';
import List from '../../components/List';
import { Fade } from 'react-awesome-reveal';
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
