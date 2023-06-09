import { FC } from 'react';
import Image from 'next/image';

import { BrokerPropsType } from '../utils/pageComponents.props';

import styles from './broker.module.css';

import { Typo, Button } from '../../../components/utils/exportComponents';

const BrokerMobileRender: FC<BrokerPropsType> = ({ active = false, setActive = () => false }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.menu}>
        <Typo txtStyle={'H2'} className={styles.title}>
          Ваш личный кредитный брокер
        </Typo>

        <ul>
          <li className={styles.menuItem}>
            <div className={styles.menuImage}>
              <Image src={'/icons/money-free.png'} layout={'fixed'} height={64} width={64} alt="" />
            </div>
            <Typo txtStyle={'H5'}>
              <p>Делаем деньги доступными</p>
            </Typo>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.menuImage}>
              <Image src={'/icons/bank.png'} layout={'fixed'} height={64} width={64} alt="" />
            </div>
            <Typo txtStyle={'H5'}>
              <p>Комфорт использования банковских продуктов</p>
            </Typo>
          </li>
          <li className={styles.menuItem}>
            <div className={styles.menuImage}>
              <Image src={'/icons/balance.png'} layout={'fixed'} height={64} width={64} alt="" />
            </div>
            <Typo txtStyle={'H5'}>
              <p>Баланс возможного невозможного в мире финансов</p>
            </Typo>
          </li>
        </ul>

        <Button fill={true} big={false} onClick={() => setActive(true)}>
          Начать работу
        </Button>
      </section>

      <section className={styles.picture}>
        <Image src={'/boss.png'} height={282} width={320} alt="" />
      </section>
    </div>
  );
};

export default BrokerMobileRender;
