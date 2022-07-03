import { TextField } from '@mui/material';
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
      <div className={styles.admin__editorContainer}>
        <div className={styles.admin__editor}>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            fullWidth
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
