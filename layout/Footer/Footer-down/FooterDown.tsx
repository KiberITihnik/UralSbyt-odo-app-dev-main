import React, { FC } from 'react';
import styles from '../Footer.module.css';
import Brand from '../../../components/Brand/brand';
import Link from 'next/link';

const FooterDown: FC = () => {
  return (
    <>
      <div className={styles.logo}>
        <Brand />

        <ul>
          <li>ИП</li>
          <li>ИНН</li>
          <li>ОГРН</li>
        </ul>
      </div>
      <div className={styles.notification}>
        <Link href={'/'}>
          <a>Политика конфиденциальности</a>
        </Link>
      </div>
    </>
  );
};

export default FooterDown;
