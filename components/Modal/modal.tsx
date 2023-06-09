import React from 'react';

import classNames from 'classnames';

import styles from './modal.module.css';
import { ModalProps } from './modal.props';

export const Modal = ({
  children,
  active,
  setActive,
  background = 'ordinary',
}: ModalProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.active]: active,
      })}
      onClick={() => setActive(false)}>
      <div
        className={classNames(styles.content, {
          [styles.contentActive]: active,
          [styles.contentBackgroundSecondary]: background === 'secondary',
          [styles.contentBackgroundPrimary]: background === 'ordinary',
        })}
        onClick={(e) => e.stopPropagation()}>
        <a className={styles.close} onClick={() => setActive(false)} />
        {children}
      </div>
      ;
    </div>
  );
};
