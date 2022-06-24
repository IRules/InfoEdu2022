import React from 'react';
import CardAdmin from '../../components/CardAdmin';
import styles from '../../styles/Admin.module.css';

function Admin() {
  return (
    <div className={styles.admin}>
      <div className={styles.admin__cardContainer}>
        <CardAdmin />
        <CardAdmin />
        <CardAdmin />
      </div>
    </div>
  );
}

export default Admin;
