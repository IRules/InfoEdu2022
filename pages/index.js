import styles from '../styles/Index.module.css';

import React, { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';


function Landing() {

  // Script media

  const [st, setSt] = useState('0px');

  const phoneMenu__hide = () => {
    setSt('0px');
  };

  const phoneMenu__show = () => {
    setSt('200px');
  };

  // Navbar sticky relativ cu scroll

  const [navbar, setNavbar] = useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavbarStyle);
  }, []);

  const changeNavbarStyle = () => {
     if(window.scrollY > 0) {
      setNavbar(true);
     } else {
      setNavbar(false);
     }
  }


  return (
    <Fade>
    <div className={styles.landing}>
      {/*------------header+prima pag-------------------*/}
      <section className={styles.headerh}>
        <nav className={navbar ? `${styles["nav"]} ${styles["nav__change__style"]}` : styles.nav}>
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
          <h1 className={styles.h1}>Primul pas spre viitorul tău</h1>
          <img src="/assets/academichat.png" className={styles.academic__hat}/>
          <p className={styles.p}>
            Vrei să-ți găsești cariera? Vrei să știi la ce facultate să îți
            continui studiile?
            <br />
            ProjectAlpha își propune să faciliteze tinerilor în cautarea
            carierei, informațiile necesare pentru <br /> facilitarea
            succesului. I-ați viitorul in propriile mâini!
          </p>
          <a href="/dash" className={styles.button}>Încearca acum</a>
          <a href="/dash" className={`${styles["button"]} ${styles["button2"]}`}>Spre Knowdelegebase</a>
          
        </div>
      </section>
      {/*--------------Content---------------*/}
      <section className={styles.content}>
        <h1 className={styles.h1}>Cum funcționează ProjectAlpha?</h1>
        <p className={styles.p}>
          Iată câțiva pași simpli prin care îți poti găsi facultatea sau școala
          la care vrei să studiezi
        </p>
        <div className={styles.row}>
          <div className={styles.column_cont}>
            <h3 className={styles.h3}>1.Alege-ți domeniul!</h3>
            <p className={styles.p}>
              Selectează din meniu, în ce domenii doresti sa studiezi (ai grijă,
              acesta e cel mai impotrant lucru) Nu știi ce să alegi? E foarte
              simplu să îți găsești domeniul preferat de muncă: trebuie doar să
              îți descoperi pasiunile și să alegi domeniul in care acestea s-ar
              potrivi cel mai bine. ex: coding--Informatică și IT;
            </p>
            <img src="/assets/alege.webp" className={styles.ghid__below__img} />
          </div>
          <div className={styles.column_cont}>
            <h3 className={styles.h3}>
              2.Apasă <span className={styles.nobr}>"Cautare".</span>
            </h3>
            <p className={styles.p}>
              E foarte simplu: selectezi butonul "Cautare" și noi ne ocupăm de
              restul. vom selecta din lista noastră cele mai potrivite facultăți
              sau universități care ți se potrivesc și ți le vom recomanda pe ecran.
              În urma căutarii in baza noastră de date, ți se vor afișa facultățiile
              care noi credem că îți sunt cele mai potrivite.
            </p>
            <img src="/assets/apasa.webp" className={styles.ghid__below__img} />
          </div>
          <div className={styles.column_cont}>
            <h3 className={styles.h3}>3.Decizia îți aparține!</h3>
            <p className={styles.p}>
              Alegerea finală e a ta. Pe ecran vei putea alege dintr-o varietate
              de unități de învățământ dispuse sub formă de carduri. Fiecare va
              avea o poză de referință și o scurtă descriere pentru a te putea
              orienta cu ușurință. De asemenea (pentru cei mai curioși dintre
              voi) am adăugat și un link facil pentru accesarea site-ului web al
              unității de învățământ pentru detalii mai concise.
            </p>
            <img src="/assets/decide.webp" className={styles.ghid__below__img} />
          </div>
        </div>
      </section>
      {/*--------------Review----------------*/}
      <section className={styles.review}>
        <h1 className={styles.h1}>Review-urile Utilizatorilor</h1>
        <p className={styles.p}>Iată ce cred doi dintre utilizatorii nostrii:</p>
        <div className={styles.row}>
          <div className={styles.reviewcard}>
            <img src="/assets/pers1.jpg" className={styles.imgr} />
            <div>
              <p className={styles.p}>
                "Cred că acest site ne este de foare mare ajutor nouă tinerilor
                pentru că ne oferă o metodă simplă si ușoară de a ne găsi
                profesia sau o unitate de învățământ la care să studiem"
              </p>
              <h3 className={styles.h3}>--Cristian Constantinescu</h3>
            </div>
          </div>
          <div className={styles.reviewcard}>
            <img src="/assets/pers2.jpg" className={styles.imgr} />
            <div>
              <p className={styles.p}>
                "Am fost surprins de utilitatea site-ului. Nu mă așteptam
                vreodată să recomand cuiva un site din proprie ințiativă dar
                acest site mi-a demonstrat contrariul. Sunt foarte multumit de
                rezultatele obținute și voi reveni de câte ori voi avea nevoie."
              </p>
              <h3 className={styles.h3}>--Diana Dobrică</h3>
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
    </div>
    </Fade>
  );
}

export default Landing;
