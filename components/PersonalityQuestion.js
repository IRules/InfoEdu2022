import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import styles from '../styles/PersonalityTest.module.css';

function PersonalityQuestion() {
  return (
    <div className={styles.question}>
      <div className={styles.questionText}></div>
      <div className={styles.questionOptions}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default PersonalityQuestion;
