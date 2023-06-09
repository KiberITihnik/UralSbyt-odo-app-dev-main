/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';

import styles from './services.module.css';
import { PageComponentPropsType } from '../utils/pageComponents.props';
import { Typo, Button } from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';
import { services } from '../../../data/static.data';

import ServicesTable from './table/services-table';
import classNames from 'classnames';

const ServicesPageComponent: FC<PageComponentPropsType> = ({ bgColor = 'var(--primary)' }) => {
  const [activeService, setActiveService] = useState(1);
  const [responsive] = useResponsive();
  const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthScreen(responsive);
    } else {
      setWidthScreen(breakPoints.isBigScreen);
    }
  }, [responsive]);

  const handleMenu = (id: number | null) => {
    setActiveService(id as any);
  };

  return (
    <WrapperHomeComponent bgColor={bgColor}>
      {widthScreen > breakPoints.isTablet && (
        <>
          <Typo txtStyle={'H1'} className={styles.title}>
            Наши услуги
          </Typo>
          <Typo txtStyle={'H4'} className={styles.subtitle}>
            Компания «Одобрение» — кредитный брокер, помогающий своим клиентам
            <br />
            наладить контакт с банками. Мы помогаем людям получить деньги быстрее <br />и дешевле,
            чем самостоятельно, даже если все отказали.
          </Typo>

          <ul className={styles.menu}>
            {services.map((s) => {
              return (
                <li key={s.id}>
                  <Button
                    className={classNames(styles.menuItem, {
                      [styles.menuItemActive]: s.id === activeService,
                    })}
                    invert={true}
                    onClick={() => handleMenu(s.id)}>
                    {s.title}
                  </Button>
                </li>
              );
            })}
          </ul>

          <ServicesTable activeService={activeService.toString()} />
        </>
      )}

      {widthScreen <= breakPoints.isTablet && (
        <div id={'services'}>
          <Typo txtStyle={'H2'} className={styles.title}>
            Наши услуги
          </Typo>
          <Typo txtStyle={'H5'} className={styles.subtitle}>
            Компания «Одобрение» — кредитный брокер, помогающий своим клиентам
            <br />
            наладить контакт с банками. Мы помогаем людям получить деньги быстрее <br />и дешевле,
            чем самостоятельно, даже если все отказали.
          </Typo>

          <ul className={styles.menu}>
            {services.map((s, index) => {
              return (
                <li key={index}>
                  <Button
                    className={classNames(styles.menuItem, {
                      [styles.menuItemActive]: s.id === activeService,
                    })}
                    invert={true}
                    onClick={() => handleMenu(s.id)}>
                    {s.title}
                  </Button>
                </li>
              );
            })}
          </ul>

          <ServicesTable activeService={activeService.toString()} />
        </div>
      )}
    </WrapperHomeComponent>
  );
};

export default ServicesPageComponent;
