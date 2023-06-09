import { FC } from 'react';

import styles from './footer-right.module.css';

import { PropsType } from '../../../types/props';
import FooterContact from '../../../components/FooterContact/footer-contact';
import FooterRightMenu from '../Footer-right-menu/footer-right-menu';

const FooterRight: FC<PropsType> = () => {
  return (
    <div className={styles.right}>
      <FooterRightMenu />

      <FooterContact className={styles.telephone} label={'Москва'} link={'tel:8 (495) 968 1574'} />
    </div>
  );
};

export default FooterRight;
