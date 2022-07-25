import React, { useEffect } from 'react';
import styles from '../styles/List.module.css';
import Card from './Card';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../lib/firebase';
import { collection, orderBy, query, where } from 'firebase/firestore';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Footer from './Fotter';

function List(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [domeniu, setDomeniu] = React.useState('*');
  const [oras, setOras] = React.useState('');
  const [multipleFac, setMultipleFac] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [facultatiList, setFacultatiList] = React.useState(null);

  let [facultati] = useCollectionData(
    query(collection(firestore, 'facultati'))
  );
  console.log(facultati);

  const handleReset = () => {
    setDomeniu('*');
    setOras('');
    setMultipleFac('');
    handleClose();
  };

  const reloadList = () => {
    setFacultatiList(null);
    setTimeout(() => {
      setFacultatiList(
        facultati &&
          facultati.map((fac) =>
            fac.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
            fac.loc.includes(oras) &&
            fac.facultati.includes(domeniu) &&
            fac.multipleFac.includes(multipleFac) ? (
              <Card
                key={fac.id}
                multipleFac={fac.multipleFac}
                image={fac.cover}
                title={fac.name}
                loc={fac.loc}
                pid={fac.slug}
                emblem={fac.emblem}
              />
            ) : null
          )
      );
    }, 100);
  };
  useEffect(() => {
    reloadList();
  }, [facultati]);

  useEffect(() => {
    reloadList();
  }, [search, oras, domeniu, multipleFac]);
  const domenii = [
    {
      label: 'Stiinte Matematice',
    },
    {
      label: 'Stiinte Fizice & Inginierie',
    },
    {
      label: 'Stiinte Chimice & Chimie Industriala',
    },
    {
      label: 'Informatica & IT',
    },
    {
      label: 'Stiinte Biolgice',
    },
    {
      label: 'Geografie - Geologie',
    },
    {
      label: 'Limba - Literatura',
    },
    {
      label: 'Istorie - Filozofie',
    },

    {
      label: 'Drept - Legislatie',
    },
    {
      label: 'Economie - Administrare',
    },
    {
      label: 'Sociologie - Pedagogie',
    },
    {
      label: 'Arte & Arhitectura',
    },
    {
      label: 'Cinematografie & Media',
    },
    {
      label: 'Muzica',
    },
  ];

  const orase = [
    {
      label: 'Bucuresti',
    },
    {
      label: 'Iasi',
    },
    {
      label: 'Cluj-Napoca',
    },
    {
      label: 'Timisoara',
    },
    {
      label: 'Constanta',
    },
    {
      label: 'Brasov',
    },
    {
      label: 'Craiova',
    },
    {
      label: 'Galati',
    },
    {
      label: 'Targoviste',
    },
    {
      label: 'Botosani',
    },
    {
      label: 'Bacau',
    },
    {
      label: 'Buzau',
    },
    {
      label: 'Baia Mare',
    },
    {
      label: 'Suceava',
    },
    {
      label: 'Piatra Neamt',
    },
    {
      label: 'Targu Mures',
    },
    {
      label: 'Targu Jiu',
    },
    {
      label: 'Pitesti',
    },
    {
      label: 'Ploiesti',
    },
    {
      label: 'Braila',
    },
    {
      label: 'Resita',
    },
  ];

  const multiFac = [
    {
      label: 'da',
    },
    {
      label: 'nu',
    },
  ];
  return (
    <div className={styles.list}>
      <div className={styles.list__filters}>
        <TextField
          label="Caută"
          size="small"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value ? e.target.value : '');
            reloadList();
          }}
        />
        &#160; &#160;
        <IconButton onClick={handleClickOpen}>
          <FilterAltIcon />
        </IconButton>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          scroll="body"
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Selecteaza filtrele dorite</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Autocomplete
                options={orase}
                renderInput={(params) => <TextField {...params} label="Oras" />}
                onChange={(e, value) => {
                  try {
                    setOras(value.label ? value.label : '');
                  } catch {
                    setOras('');
                  }
                  console.log(oras);
                }}
                value={oras}
              />
              <br></br>
              <Autocomplete
                options={domenii}
                renderInput={(params) => (
                  <TextField {...params} label="Domeniu de studiu" />
                )}
                onChange={(e, value) => {
                  setDomeniu(value ? value.label : '*');
                  console.log(domeniu);
                }}
                value={domeniu}
              />
              <br></br>
              <Autocomplete
                options={multiFac}
                renderInput={(params) => (
                  <TextField {...params} label="Multiple facultati" />
                )}
                onChange={(e, value) => {
                  setMultipleFac(value ? value.label : '');
                  console.log(multiFac);
                }}
                value={multipleFac}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleReset} autoFocus>
              Reset
            </Button>
            <Button onClick={handleClose} autoFocus>
              Gata
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={styles.list__content}>
        <div className={styles.list__container}>
          {/* {facultati &&
          facultati.map((fac) => {
            fac.name.toLowerCase().includes(search) &&
            fac.loc.includes(oras) &&
            fac.facultati.includes(domeniu) &&
            fac.multipleFac.includes(multipleFac) ? (
              <Card
                key={fac.id + Math.random()}
                multipleFac={fac.multipleFac}
                image={fac.cover}
                title={fac.name}
                loc={fac.loc}
                pid={fac.slug}
                emblem={fac.emblem}
              />
            ) : (
              <>s</>
            );
          })} */}
          {facultatiList}
          {/* <Card
          multipleFac={true}
          image="https://univero.cc/public/media/university/imgs/image-1/1616069697_118939302.jpg"
          title="Universitatea Babeș-Bolyai"
          loc="Cluj-Napoca"
          pid="ubbcluj"
        /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default List;
