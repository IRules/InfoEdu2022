import styles from '../styles/Landing.module.css';
import CountUp from 'react-countup';
import Image from 'next/image';
import {
  Alert,
  Avatar,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [budget, setBudget] = useState('');

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [location, setLocation] = useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bac, setBac] = useState('');

  const handleBac = (event) => {
    setBac(event.target.value);
  };
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const steps = [
    {
      label: 'Alege media & bugetul tau',
      description: (
        <div>
          <Alert severity="info">
            Aceste date sunt folosite pentru a identifica facultatile la care te
            poti duce.
          </Alert>
          <br></br>
          <FormControl fullWidth>
            <InputLabel>Buget</InputLabel>
            <Select value={budget} label="Buget" onChange={handleBudget}>
              <MenuItem value={1}>Mic</MenuItem>
              <MenuItem value={2}>Mediu</MenuItem>
              <MenuItem value={3}>Mare</MenuItem>
            </Select>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl fullWidth>
            <InputLabel>Medie BAC</InputLabel>
            <Select value={bac} label="Medie BAC" onChange={handleBac}>
              <MenuItem value={1}>5-7</MenuItem>
              <MenuItem value={2}>8-9</MenuItem>
              <MenuItem value={3}>9-10</MenuItem>
              <MenuItem value={4}>10</MenuItem>
            </Select>
          </FormControl>
        </div>
      ),
    },
    {
      label: 'Alege domeniul de studiu',
      description: (
        <div>
          <Alert severity="info">
            Nu sti ce sa studiezi? Incearca ghidul nostru aici:
            <Button variant="contained">Ghid Facultate</Button>
          </Alert>
          <br></br>
          <FormControl fullWidth>
            <InputLabel>Domeniul de studiu</InputLabel>
            <Select value={bac} label="Medie BAC" onChange={handleBac}>
              <MenuItem value={1}>5-7</MenuItem>
              <MenuItem value={2}>8-9</MenuItem>
              <MenuItem value={3}>9-10</MenuItem>
              <MenuItem value={4}>10</MenuItem>
            </Select>
          </FormControl>
        </div>
      ),
    },
    {
      label: 'Alege zona dorita',
      description: (
        <div>
          <Alert severity="info">
            Zona dorita ne ajuta sa filtram mai usor relevanta facultatilor
            dorite de tine.
          </Alert>
          <br></br>
          <FormControl fullWidth>
            <InputLabel>Zona</InputLabel>
            <Select value={location} label="Locatie" onChange={handleLocation}>
              <MenuItem value={1}>Nord</MenuItem>
              <MenuItem value={2}>Sud</MenuItem>
              <MenuItem value={3}>Est</MenuItem>
              <MenuItem value={3}>Vest</MenuItem>
            </Select>
          </FormControl>
        </div>
      ),
    },
  ];

  return (
    <Fade>
      <div className={styles.main}>
        <div className={styles.main__navbar}>
          <div className={styles.main__navbarLogo}>
            <Avatar />
          </div>
          <div className={styles.main__navbarFiller} />
          <div className={styles.main__navbarButtons}>
            <Link href="/facultati">
              <Button variant="outlined">Facultati</Button>
            </Link>
            &#160;&#160;&#160;
            <Button variant="outlined">Ghid Facultate</Button>
            &#160;&#160;&#160;
            <Button variant="outlined">Despre Noi</Button>
            &#160;&#160;&#160;
            <Button variant="outlined">Knowledgebase</Button>
          </div>
          <div className={styles.main__navbarAuth}>
            <Button variant="contained">Register</Button>
            &#160;&#160;&#160;
            <Button variant="contained">Log in</Button>
          </div>
          <div className={styles.main__navbarMobile}>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Facultati</MenuItem>
              <MenuItem onClick={handleClose}>Ghid Facultate</MenuItem>
              <MenuItem onClick={handleClose}>Despre noi</MenuItem>
              <MenuItem onClick={handleClose}>Knowledgebase</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Register</MenuItem>
              <MenuItem onClick={handleClose}>Log in</MenuItem>
            </Menu>
          </div>
        </div>
        <div className={styles.main__image}>
          <div className={styles.main__imageText}>
            <h1>Bun venit pe platforma noastra!</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </div>
          <div className={styles.main__imageFiller} />
          <div className={styles.main__imageForm}>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              className={styles.main__imageFormSteps}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 0 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Gata' : 'Continua'}
                        </Button>
                        <Button
                          variant="outlined"
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Inapoi
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3, ml: 2 }}>
                <Typography>
                  Cauta facultate conform specificatilor dorite!
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Cauta acum
                </Button>
              </Paper>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
