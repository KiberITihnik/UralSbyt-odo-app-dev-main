import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PageComponentPropsType } from '../utils/pageComponents.props';

import styles from './team.module.css';

import { Typo, FinallyCard, Button } from '../../../components/utils/exportComponents';
import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

const TeamPageComponent: FC<PageComponentPropsType> = ({ bgColor = 'var(--white)' }) => {
  const [responsive] = useResponsive();
  const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);

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
        <Typo txtStyle={'H1'} className={styles.title}>
          Наша команда
        </Typo>
      )}

      {widthScreen <= breakPoints.isTablet && (
        <Typo txtStyle={'H2'} className={styles.title}>
          Наша команда
        </Typo>
      )}

      <div className={styles.table}>
        <div className={styles.a1}>
          {widthScreen >= breakPoints.isDesktopOrLaptop && (
            <Typo txtStyle={'H4'}>
              Наша главная ценность — помощь людям. Мы находим индивидуальный подход к каждому
              клиенту. На первом этапе наши специалисты собирают всю необходимую информацию, затем
              мы организуем консилиум и анализируем каждый случай, а в завершении предлагаем клиенту
              свое решение и правильный порядок действий. Клиенту остается выбрать: решать свою
              проблему самостоятельно или идти с нами.
            </Typo>
          )}

          {widthScreen <= breakPoints.isTablet && (
            <Typo txtStyle={'H5'}>
              Наша главная ценность — помощь людям. Мы находим индивидуальный подход к каждому
              клиенту. На первом этапе наши специалисты собирают всю необходимую информацию, затем
              мы организуем консилиум и анализируем каждый случай, а в завершении предлагаем клиенту
              свое решение и правильный порядок действий. Клиенту остается выбрать: решать свою
              проблему самостоятельно или идти с нами.
            </Typo>
          )}
        </div>
        <figure className={styles.b1}>
          <Image
            src={'/main/team/team-1.png'}
            className={styles.gallery__img}
            width={1}
            height={1}
            alt=""
          />
        </figure>
        <figure className={styles.c1}>
          <Image
            // src={"/rectangle_2866.png"}
            src={'/main/team/team-2.png'}
            className={styles.gallery__img}
            width={1}
            height={1}
            alt=""
          />
        </figure>
        <figure className={styles.a2}>
          <Image src={'/main/team/team-6.png'} height={600} width={630} alt="" />
        </figure>
        <figure className={styles.b2}>
          <Image src={'/main/team/team-5.png'} height={400} width={300} alt="" />
        </figure>
        <figure className={styles.c2}>
          <Image src={'/main/team/team-4.png'} height={400} width={300} alt="" />
        </figure>
        <figure className={styles.b3}>
          <Image src={'/main/team/team-3.png'} height={600} width={630} alt="" />
        </figure>
        <figure className={styles.a4}>
          <Image src={'/main/team/team-22.png'} height={400} width={630} alt="" />
        </figure>
        <figure className={styles.a5}>
          <Image src={'/main/team/team-11.png'} height={400} width={300} alt="" />
        </figure>
        <figure className={styles.b5}>
          <Image src={'/main/team/team-7.png'} height={400} width={520} alt="" />
        </figure>
        <figure className={styles.c5}>
          <Link href={'/team'}>
            <a>
              <FinallyCard
                body={{ title: 'Познакомиться с командой', link: '/team' }}
                className={styles.wrapperFinalCard}
              />
            </a>
          </Link>
        </figure>
      </div>

      <Link href={'/team'}>
        <a>
          <Button fill={true} big={false} className={styles.btnAllCases}>
            Познакомится с командой
          </Button>
        </a>
      </Link>
    </WrapperHomeComponent>
  );
};

export default TeamPageComponent;
