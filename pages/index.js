import styles from '../styles/Index.module.css';

import React, { useState } from 'react';
import Link from 'next/link';

function Landing() {
  const [st, setSt] = useState('0px');

  const hphoneMenu = (e) => {
    setSt('0px');
  };

  const sphoneMenu = (e) => {
    setSt('200px');
  };

  return (
    <div className={styles.landing}>
      {/*------------header+prima pag-------------------*/}
      <section className={styles.headerh}>
        <nav className={styles.nav}>
          <a href="/">
            <img src="/assets/logo.png" />
          </a>
          <div
            className={styles.nav_links}
            id="navlinks"
            style={{ marginRight: st }}
          >
            <i className="fa fa-times" onClick={hphoneMenu} />
            <ul>
              <li>
                <Link href="/">Acasă</Link>
              </li>
              <li>
                <Link href="/about">Despre</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/dash">Login</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={sphoneMenu} />
        </nav>
        <div className={styles.text_box}>
          <h1>Primul pas spre viitorul tău</h1>
          <p>
            Vrei să-ți găsești cariera? Vrei să știi la ce facultate să îți
            continui studiile?
            <br />
            ProjectAlpha își propune să faciliteze tinerilor în cautarea
            carierei, informațiile necesare pentru <br /> facilitarea
            succesului. I-ați viitorul in propriile mâini!
          </p>
          <Link href="/dash" className={styles.buttonstart}>
            Încearca acum
          </Link>
        </div>
      </section>
      {/*--------------Content---------------*/}
      <section className={styles.content}>
        <h1>Cum funcționează ProjectAlpha?</h1>
        <p>
          Iată câțiva pași simpli prin care îți poti găsi facultatea sau școala
          la care vrei să studiezi
        </p>
        <div className={styles.row}>
          <div className={styles.column_cont}>
            <h3>1.Alege-ți domeniul!</h3>
            <p>
              Selectează din meniu, în ce domenii doresti sa studiezi (ai grijă,
              acesta e cel mai impotrant lucru) Nu știi ce să alegi? E foarte
              simplu să îți găsești domeniul preferat de muncă: trebuie doar să
              îți descoperi pasiunile și să alegi domeniul in care acestea s-ar
              potrivi cel mai bine. ex: coding--Informatică și IT;
            </p>
          </div>
          <div className={styles.column_cont}>
            <h3>
              2.Apasă <span className={styles.nobr}>"Cautare".</span>
            </h3>
            <p>
              E foarte simplu: selectezi butonul "Cautare" și noi ne ocupăm de
              restul. vom selecta din lista noastră cele mai potrivite facultati
              sau școli care ți se potrivesc și ți le vom recomanda pe ecran.
            </p>
          </div>
          <div className={styles.column_cont}>
            <h3>3.Decizia îți aparține!</h3>
            <p>
              Alegerea finală e a ta. Pe ecran vei putea alege dintr-o varietate
              de unități de învățământ dispuse sub formă de carduri. Fiecare va
              avea o poză de referință și o scurtă descriere pentru a te putea
              orienta cu ușurință. De asemenea (pentru cei mai curioși dintre
              voi) am adăugat și un link facil pentru accesarea site-ului web al
              unității de învățământ pentru detalii mai concise.
            </p>
          </div>
        </div>
      </section>
      {/*--------------Review----------------*/}
      <section className={styles.review}>
        <h1>Review-urile Utilizatorilor</h1>
        <p>Iată ce cred doi dintre utilizatorii nostrii:</p>
        <div className={styles.row}>
          <div className={styles.reviewcard}>
            <img src="/assets/pers1.png" className={styles.imgr} />
            <div>
              <p>
                "Cred că acest site ne este de foare mare ajutor nouă tinerilor
                pentru că ne oferă o metodă simplă si ușoară de a ne găsi
                profesia sau o unitate de învățământ la care să studiem"
              </p>
              <h3>--Cristian Constantinescu</h3>
            </div>
          </div>
          <div className={styles.reviewcard}>
            <img src="/assets/pers2.png" className={styles.imgr} />
            <div>
              <p>
                "Am fost surprins de utilitatea site-ului. Nu mă așteptam
                vreodată să recomand cuiva un site din proprie ințiativă dar
                acest site mi-a demonstrat contrariul. Sunt foarte multumit de
                rezultatele obținute și voi reveni de câte ori voi avea nevoie."
              </p>
              <h3>--Diana Dobrică</h3>
            </div>
          </div>
        </div>
      </section>
      {/*--------------Citat----------------*/}
      <section className={styles.citat}>
        <h3 className={styles.citattext}>
          "Suntem de părere că sunt puține moduri de a-ți afla traseul necesar
          pentu obținerea unui job sau găsirea unei profesii/cariere, așa că am
          creat ProjectAlpha, site-ul necesar fiecărui tânar în căutarea
          drumului său spre viitor."
        </h3>
        <p className={styles.citattext}>~Echipa Alpha~</p>
      </section>
      {/*--------------Footer----------------*/}
      <section className={styles.footer}>
        <ul>
          <li>
            <Link href="index.html">Acasă</Link>{' '}
          </li>
          <li>
            <Link href="about.html">Despre</Link>
          </li>
          <li>
            <Link href="contact.html">Contact</Link>
          </li>
        </ul>
        <p>
          ~Made with <i className="fa fa-heart" /> by AlphaTeam~
        </p>
      </section>
      {/*--------------Script meniu inchis/deschis----------------*/}
    </div>
  );
}

export default Landing;
