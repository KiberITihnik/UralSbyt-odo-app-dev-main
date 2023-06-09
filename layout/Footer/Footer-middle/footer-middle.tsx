import { FC } from 'react';
import { PropsType } from '../../../types/props';
import styles from './footer-middle.module.css';

import FooterContact from '../../../components/FooterContact/footer-contact';
import Social from '../../../components/Social/social';
import FooterLeftMenu from '../Footer-left-menu/footer-left-menu';

const FooterMiddle: FC<PropsType> = () => {
  return (
    <div className={styles.middle}>
      <FooterLeftMenu />
      <Social />
      <FooterContact
        className={styles.telephone}
        label={'Челябинск'}
        link={'tel:8 (351) 200 2000'}
      />
    </div>
  );
};

export default FooterMiddle;
