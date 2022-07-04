import React from 'react';
import styles from '../styles/Profession.module.css';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

function Profession() {
  return (
    <div className={styles.profession}>
      <div className={styles.profession__content}>
        <div className={styles.profession__imageBack}>
          <HomeRepairServiceIcon
            className={styles.profession__imageFront}
            sx={{
              fontSize: 70,
              color: '#000000',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          />
        </div>
        <div className={styles.profession__contentDetails}>
          <span className={styles.profession__contentName}>
            Inginer mecanic
          </span>
          <p>
            Inginerii mecanici proiectează și evaluează mașinile, precum și
            motoarele și toate tipurile de sisteme mecanice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profession;
