import React from 'react';

import { PropsType } from '../../types/props';
import classNames from 'classnames';

import styles from './Footer.module.css';

import FooterDown from './Footer-down/FooterDown';
import Subscribe from './Subscribe/subscribe';
import FooterContact from '../../components/FooterContact/footer-contact';
import FooterLeftMenu from './Footer-left-menu/footer-left-menu';
import Social from '../../components/Social/social';
import FooterRightMenu from './Footer-right-menu/footer-right-menu';

const Footer = ({ ...props }: PropsType): JSX.Element => {
  return (
    <footer className={classNames(props.className, [styles.footer])}>
      <>
        {/*<FooterLeft />*/}

        <Subscribe className={styles.subscribe} />

        <FooterContact
          className={styles.mail}
          label={'Почта для обращений'}
          link={'mailto:news@news.loc'}
        />

        {/*<FooterMiddle />*/}

        <section className={styles.menuLeft}>
          <FooterLeftMenu />
        </section>

        <Social className={styles.social} />

        <FooterContact
          className={styles.telChel}
          label={'Челябинск'}
          link={'tel:8 (351) 000 2000'}
        />

        {/*<FooterRight />*/}

        <section className={styles.menuRight}>
          <FooterRightMenu />
        </section>

        <FooterContact className={styles.telMsk} label={'Москва'} link={'tel:8 (495) 999 9999'} />

        {/*<div className={styles.line} />*/}

        <FooterDown />
      </>
    </footer>
  );
};

export default Footer;
