import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './enroll.module.css';

import {
  Typo,
  Button,
  ModalRecordConsultation,
  Modal,
} from '../../../components/utils/exportComponents';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

const EnrollPageComponent: FC<PageComponentPropsType> = ({ bgColor = 'var(--white' }) => {
  const [responsive] = useResponsive();
  const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthScreen(responsive);
    } else {
      setWidthScreen(breakPoints.isBigScreen);
    }
  }, [responsive]);

  return (
    <WrapperHomeComponent bgColor={bgColor}>
      {widthScreen >= breakPoints.isDesktopOrLaptop && (
        <>
          <div className={styles.body}>
            <div className={styles.info}>
              <header>
                <Typo txtStyle={'H1'} className={styles.title}>
                  Запишитесь <br /> на бесплатную <br /> консультацию
                </Typo>
              </header>
              <Typo txtStyle={'H4'} className={styles.subtitle}>
                Приглашаем на бесплатную консультацию с менеджером. На встрече вы сможете посмотреть
                свою кредитную историю, проанализировать ее вместе с экспертом и узнать свои
                возможности одобрения кредита.
              </Typo>

              <Button fill={true} big={true} onClick={() => setActiveModal(true)}>
                Записаться
              </Button>
            </div>
            <div className={styles.image}>
              <Image src={'/enroll.png'} width={410} height={410} />
            </div>
          </div>
        </>
      )}

      {widthScreen <= breakPoints.isTablet && (
        <>
          <div className={styles.body}>
            <div className={styles.info}>
              <header>
                <Typo txtStyle={'H2'} className={styles.title}>
                  Запишитесь на бесплатную консультацию
                </Typo>
              </header>
              <Typo txtStyle={'H5'} className={styles.subtitle}>
                Приглашаем на бесплатную консультацию с менеджером. На встрече вы сможете посмотреть
                свою кредитную историю, проанализировать ее вместе с экспертом и узнать свои
                возможности одобрения кредита.
              </Typo>

              <Button fill={true} big={false} onClick={() => setActiveModal(true)}>
                Записаться
              </Button>
            </div>
            <div className={styles.image}>
              <Image src={'/enroll.png'} width={280} height={280} />
            </div>
          </div>
        </>
      )}
      <Modal active={activeModal} setActive={setActiveModal}>
        <ModalRecordConsultation setActive={setActiveModal} />
      </Modal>
    </WrapperHomeComponent>
  );
};

export default EnrollPageComponent;
