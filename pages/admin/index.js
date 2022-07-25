import axios from 'axios';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import CardAdmin from '../../components/CardAdmin';
import Navbar from '../../components/Navbar';
import { auth, firestore } from '../../lib/firebase';
import styles from '../../styles/Admin.module.css';
import { useRouter } from 'next/router';
import Footer from '../../components/Fotter';

function Admin() {
  const router = useRouter();

  const [facultati] = useCollectionData(
    query(collection(firestore, 'facultati')),
    orderBy('vizite', 'desc'),
    limit(3)
  );

  useEffect(() => {
    setTimeout(async () => {
      if (auth.currentUser) {
        await axios
          .post(`/api/admin/isAdmin/`, {
            token: auth.currentUser.toJSON().stsTokenManager.accessToken,
          })
          .then((res) => {
            if (!res.data.isAdmin) {
              router.push('/');
            }
          })
          .catch((err) => {
            router.push('/');
          });
      } else {
        router.push('/');
      }
    }, 500);
  }, [auth.currentUser]);

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
        <Footer />
      </div>
    </>
  );
}

export default Admin;
