import { TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import CardAdmin from '../../components/CardAdmin';
import { auth } from '../../lib/firebase';
import styles from '../../styles/Admin.module.css';

function Admin() {
  auth.signOut();
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
