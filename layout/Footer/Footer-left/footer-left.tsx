import { FC } from 'react';
import { PropsType } from '../../../types/props';
import styles from './/footer-left.module.css';

import FooterContact from '../../../components/FooterContact/footer-contact';

import Subscribe from '../Subscribe/subscribe';

const FooterLeft: FC<PropsType> = () => {
  return (
    <div className={styles.left}>
      <Subscribe />
      <FooterContact
        className={styles.mail}
        label={'Почта для обращений'}
        link={'mailto:info@odobrenie.ru'}
      />
    </div>
  );
};

export default FooterLeft;
