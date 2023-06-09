import React, { FC } from 'react';

import styles from './badges.module.css';
import { BadgesPropsType } from './badges.props';

export const Badges: FC<BadgesPropsType> = ({ children, className }) => {
  return <div className={[styles.wrapper, className].join(' ')}>{children}</div>;
};
