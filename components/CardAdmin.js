import { Avatar } from '@mui/material';
import React from 'react';
import styles from '../styles/Admin.module.css';
import PlaceIcon from '@mui/icons-material/Place';
import CountUp from 'react-countup';
function CardAdmin() {
  return (
    <div className={styles.admin__card}>
      <div className={styles.admin__cardUniversity}>
        <div className={styles.admin__cardUniversityEmblem}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            variant="rounded"
            src="https://yt3.ggpht.com/ytc/AKedOLTw4UuhjdclbzQRMkfHSwDDPCPxRjdWfTKOtHbjRg=s900-c-k-c0x00ffffff-no-rj"
          ></Avatar>
        </div>
        <div className={styles.admin__cardUniversityInfo}>
          <div className={styles.admin__cardUniversityInfoName}>
            Universitatea Babeș-Bolyai
          </div>
          <div className={styles.admin__cardUniversityInfoLocation}>
            <PlaceIcon />
            Cluj-Napoca
          </div>
        </div>
        <div className={styles.admin__cardUniversityFiller}></div>
      </div>
      <div className={styles.admin__cardStatistics}>
        <div className={styles.admin__cardStatisticsClicks}>
          <div className={styles.admin__cardStatisticsClicksName}>Clickuri</div>
          <div className={styles.admin__cardStatisticsClicksNumber}>
            <CountUp end={69420} duration={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
