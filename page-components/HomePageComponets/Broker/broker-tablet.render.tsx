import { FC } from 'react';
import Image from 'next/image';

import { BrokerPropsType } from '../utils/pageComponents.props';

import styles from './broker.module.css';
import { Typo, Button } from '../../../components/utils/exportComponents';

const BrokerTabletRender: FC<BrokerPropsType> = ({ active = false, setActive = () => false }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.menu}>
        <Typo txtStyle={'H2'} className={styles.title}>
          Ваш личный <br /> кредитный брокер
        </Typo>

        <ul>
          <li className={styles.menuItem}>
            <Image src={'/icons/money-free.png'} height={64} width={64} />
            <Typo txtStyle={'H5'}>Делаем деньги доступными</Typo>
          </li>
          <li className={styles.menuItem}>
            <Image src={'/icons/bank.png'} height={64} width={64} />
            <Typo txtStyle={'H5'}>
              <p>
                Комфорт использования банковских <br /> продуктов
              </p>
            </Typo>
          </li>
          <li className={styles.menuItem}>
            <Image src={'/icons/balance.png'} height={64} width={64} />
            <Typo txtStyle={'H5'}>
              <p>
                Баланс возможного невозможного <br /> в мире финансов
              </p>
            </Typo>
          </li>
        </ul>

        <Button fill={true} big={false} onClick={() => setActive(true)}>
          Начать работу
        </Button>
      </section>

      <section className={styles.picture}>
        <Image src={'/boss.png'} height={318} width={361} />
      </section>
    </div>
  );
};

export default BrokerTabletRender;
