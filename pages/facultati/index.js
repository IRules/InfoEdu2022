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

export default function Facultati() {
  const [value, setValue] = useState('Recente');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.app}>
      <Navbar />
      <BottomNavigation
        sx={{ backgroundColor: '#fa6504', height: '5vh' }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recente"
          value="Recente"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Stiinte Matematice"
          value="Stiinte Matematice"
          icon={<FunctionsIcon />}
        />
        <BottomNavigationAction
          label="Inginierie"
          value="Inginierie"
          icon={<EngineeringIcon />}
        />
        <BottomNavigationAction
          label="Arhitectura"
          value="Arhitectura"
          icon={<ArchitectureIcon />}
        />
        <BottomNavigationAction
          label="Limba & Literatura"
          value="Limba & Literatura"
          icon={<TranslateIcon />}
        />
      </BottomNavigation>
      <List></List>
    </div>
  );
}
