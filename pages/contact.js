import styles from '../styles/Index.module.css';

import React, { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';
import Navbar from '../components/Navbar';


function Landing() {

  return (
    <Fade>
    <div >
      {/*------------header+prima pag-------------------*/}
      <section className={`${styles["headerh"]} ${styles["headerc"]}`}>
      <Navbar/>
        <div className={styles.text_box}>
          <h1 className={`${styles["h1"]} ${styles["h1__a_and_c"]}`}>Contact</h1>
          <p className={`${styles["p"]} ${styles["p__a_and_c"]}`}>Vrei să ne conctactezi?<br/>
           Ne poți gasi pe următoarele platforme:</p>
           <div className={styles.icons}>
             <li className={styles.li}><a href="https://github.com/IRules">GitHub: Toma Aris</a> </li>
             <li className={styles.li}><a href="https://github.com/BLADR-ONE">GitHub: Ureche Rafael</a></li>
           </div>

          <div className={styles.footer}>
          <p className={`${styles["p"]} ${styles["p__a_and_c"]}`}>
           ~Made with <FontAwesomeIcon icon={faHeart} /> by AlphaTeam~
          </p>
        </div>
       </div>
      </section>
    </div>
    </Fade>
  );
}

export default Landing;
