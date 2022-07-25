import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Index.module.css';

function Footer() {
  return (
    <>
      {/*--------------Footer----------------*/}
      <section className={styles.footer}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">Acasă</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/about">Despre</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/contact">Contact</Link>
          </li>
          <div className={styles.vertical__line} />
          <li className={styles.li}>
            <Link href="/dash">Login</Link>
          </li>
        </ul>
        <p className={styles.p}>
          ~Made with <FontAwesomeIcon icon={faHeart} /> by AlphaTeam~
        </p>
      </section>
    </>
  );
}

export default Footer;
