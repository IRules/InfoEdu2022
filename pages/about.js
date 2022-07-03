import styles from '../styles/Index.module.css';

import React, { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  const [st, setSt] = useState('0px');

  const phoneMenu__hide = (e) => {
    setSt('0px');
  };

  const phoneMenu__show = (e) => {
    setSt('200px');
  };

  return (
    <div >
      {/*------------header+prima pag-------------------*/}
      <section className={`${styles["headerh"]} ${styles["headera"]}`}>
      <nav className={styles.nav}>
          <a href="/">
            <img src="/assets/logo.png"  className={styles.img} style=
            {{width: 130 }}/>
          </a>
          <div
            className={styles.nav_links}
            id="navlinks"
            style={{ marginRight: st }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.fa}
              onClick={phoneMenu__hide}
            />
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
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.fa}
            onClick={phoneMenu__show}
          />
        </nav>
        <div className={styles.text_box}>
          <h1 className={`${styles["h1"]} ${styles["h1__a_and_c"]}`}>Despre noi:</h1>
          <p className={`${styles["p"]} ${styles["p__a_and_c"]}`}>Suntem o ehipă de 2 elevi de la Colegiul Național Gheorghe Șincai,<br/> 
          Baia Mare, Maramureș și suntem pasionati de informatică,<br/> de acca am 
          decis să facem acest site, pentru a demonstra câ de utilă <br/>poate fi aceasta
          în contextul găsirii unui traseu in viață.</p>

          <div className={styles.footer}>
          <p className={`${styles["p"]} ${styles["p__a_and_c"]}`}>
           ~Made with <FontAwesomeIcon icon={faHeart} /> by AlphaTeam~
          </p>
        </div>
       </div>
      </section>
    </div>
  );
}

export default Landing;
