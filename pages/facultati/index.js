import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Facultati.module.css';
import RestoreIcon from '@mui/icons-material/Restore';
import { useState } from 'react';
import FunctionsIcon from '@mui/icons-material/Functions';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TranslateIcon from '@mui/icons-material/Translate';
import List from '../../components/List';
import { Fade } from 'react-awesome-reveal';

export default function Facultati() {
  const [value, setValue] = useState('Recente');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fade>
      <div className={styles.app}>
        <div className={styles.app__categories}>
          <BottomNavigation
            sx={{
              backgroundColor: '#F06539',
              height: '5vh',
            }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction value="Recente" icon={<div>Fizicas</div>} />
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
        <List></List>
      </div>
    </Fade>
  );
}
