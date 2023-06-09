import { FC, memo } from 'react';
import { PropsType } from '../../types/props';

import styles from './home-page.module.css';

import {
  Broker,
  CalculatorPageComponent,
  Solutions,
  Team,
  Paper,
  Analysis,
  Reviews,
  Services,
  Enroll,
} from './utils/exportPageComponents';

const HomePage: FC<PropsType> = () => {
  return (
    <div className={styles.wrapper}>
      <Broker />
      <CalculatorPageComponent />
      <Solutions />
      <Team />
      <Paper />
      <Analysis />
      <Reviews />
      <Services />
      <Enroll />
    </div>
  );
};

export default memo(HomePage);
