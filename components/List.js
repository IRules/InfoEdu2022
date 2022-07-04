import React from 'react';
import styles from '../styles/List.module.css';
import Card from './Card';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../lib/firebase';
import { collection, orderBy, query } from 'firebase/firestore';

function List(props) {
  const [facultati] = useCollectionData(
    query(collection(firestore, 'facultati')),
    orderBy('name')
  );

  return (
    <div className={styles.list}>
      <div className={styles.list__container}>
        {props.searchValue}
        {facultati &&
          facultati.map((fac) => (
            <Card
              key={fac.id + Math.random()}
              multipleFac={fac.multipleFac}
              image={fac.cover}
              title={fac.name}
              loc={fac.loc}
              pid={fac.slug}
            />
          ))}
        {/* <Card
          multipleFac={true}
          image="https://univero.cc/public/media/university/imgs/image-1/1616069697_118939302.jpg"
          title="Universitatea Babeș-Bolyai"
          loc="Cluj-Napoca"
          pid="ubbcluj"
        /> */}
      </div>
    </div>
  );
}

export default List;
