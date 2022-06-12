import React from 'react';
import styles from '../styles/List.module.css';
import Card from './Card';
import Footer from './Footer';

function List() {
  return (
    <div className={styles.list}>
      <div className={styles.list__container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default List;
