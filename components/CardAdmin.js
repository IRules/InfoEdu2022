import { Avatar, Rating } from '@mui/material';
import React from 'react';
import styles from '../styles/Admin.module.css';
import PlaceIcon from '@mui/icons-material/Place';
import CountUp from 'react-countup';
function CardAdmin(props) {
  return (
    <div className={styles.admin__card}>
      <div className={styles.admin__cardUniversity}>
        <div className={styles.admin__cardUniversityEmblem}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            variant="rounded"
            src={props.emblem}
          ></Avatar>
        </div>
        <div className={styles.admin__cardUniversityInfo}>
          <div className={styles.admin__cardUniversityInfoName}>
            {props.name}
          </div>
          <div className={styles.admin__cardUniversityInfoLocation}>
            <PlaceIcon />
            {props.loc}
          </div>
        </div>
        <div className={styles.admin__cardUniversityFiller}></div>
      </div>
      <div className={styles.admin__cardStatistics}>
        <div className={styles.admin__cardStatisticsClicks}>
          <div className={styles.admin__cardStatisticsClicksName}>Vizite</div>
          <div className={styles.admin__cardStatisticsClicksNumber}>
            <CountUp end={props.vizite} duration={3} />
          </div>
        </div>
        <div className={styles.admin__cardStatisticsClicks}>
          <div className={styles.admin__cardStatisticsClicksName}>Recenzie</div>
          <div className={styles.admin__cardStatisticsClicksNumber2}>
            {(Math.round(props.rating * 100) / 100).toFixed(1)}
          </div>
        </div>
        <div className={styles.admin__cardStatisticsClicks2}>
          <div className={styles.admin__cardStatisticsClicksName}>
            Nr. Recenzii
          </div>
          <div className={styles.admin__cardStatisticsClicksNumber3}>
            <CountUp end={props.nrReviews} duration={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
