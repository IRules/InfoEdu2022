import { TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, limit, orderBy, query, where } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import CardAdmin from '../../components/CardAdmin';
import Navbar from '../../components/Navbar';
import { auth, firestore } from '../../lib/firebase';
import styles from '../../styles/Admin.module.css';

function Admin() {
  const [facultati] = useCollectionData(
    query(collection(firestore, 'facultati')),
    orderBy('vizite', 'desc'),
    limit(3)
  );

  return (
    <>
      <div className={styles.admin}>
        <Navbar navstyle={true} />
        <div className={styles.admin__cardContainer}>
          {facultati &&
            facultati.map((fac) => (
              <CardAdmin
                key={fac.id}
                emblem={fac.emblem}
                name={fac.name}
                loc={fac.loc}
                vizite={fac.vizite}
                rating={fac.sumReviews / fac.nrReviews}
                nrReviews={fac.nrReviews}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Admin;
