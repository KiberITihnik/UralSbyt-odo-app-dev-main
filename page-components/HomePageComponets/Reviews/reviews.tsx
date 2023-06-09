import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import styles from './reviews.module.css';

import {
  Typo,
  Button,
  Modal,
  FinallyCard,
  ReviewCard,
  YoutubeEmbed,
} from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';
import { reviews } from '../../../data/static.data';

const ReviewsPageComponent: FC<PageComponentPropsType> = ({ bgColor = 'var(--white)' }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [embedId, setEmbedId] = useState('');

  const [responsive] = useResponsive();
  const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthScreen(responsive);
    } else {
      setWidthScreen(breakPoints.isBigScreen);
    }
  }, [responsive]);

  const handleClick = (embedId: string) => {
    setActiveModal(true);
    setEmbedId(embedId);
  };

  return (
    <WrapperHomeComponent bgColor={bgColor}>
      {widthScreen >= breakPoints.isDesktopOrLaptop && (
        <>
          <Typo txtStyle={'H1'} className={styles.title}>
            Отзывы клиентов
          </Typo>
          <div className={styles.table}>
            {reviews.slice(0, 3).map((review, index) => {
              return (
                <picture
                  key={index}
                  className={styles.item}
                  onClick={() => handleClick(review.link)}>
                  <ReviewCard
                    title={review.title}
                    person={review.person}
                    link={review.link}
                    image={review.image}
                  />
                </picture>
              );
            })}

            <Link href={'/reviews'}>
              <a>
                <FinallyCard
                  className={styles.finallyCard}
                  body={{
                    title: 'Смотреть все отзывы',
                    link: '/reviews',
                  }}
                />
              </a>
            </Link>
          </div>
        </>
      )}

      {widthScreen === breakPoints.isTablet && (
        <>
          <Typo txtStyle={'H2'} className={styles.title}>
            Отзывы клиентов
          </Typo>
          <div className={styles.table}>
            {reviews.slice(0, 3).map((review, index) => {
              return (
                <picture
                  key={index}
                  className={styles.item}
                  onClick={() => handleClick(review.link)}>
                  <ReviewCard
                    title={review.title}
                    person={review.person}
                    link={review.link}
                    image={review.image}
                  />
                </picture>
              );
            })}
          </div>
          <Link href={'/reviews'}>
            <a>
              <Button fill={true} big={false} className={styles.btnAllCases}>
                Все материалы
              </Button>
            </a>
          </Link>
        </>
      )}

      {widthScreen < breakPoints.isTablet && (
        <>
          <Typo txtStyle={'H2'} className={styles.title}>
            Отзывы клиентов
          </Typo>

          <div className={styles.table}>
            {reviews.slice(0, 1).map((review, index) => {
              return (
                <picture
                  key={index}
                  className={styles.item}
                  onClick={() => handleClick(review.link)}>
                  <ReviewCard
                    title={review.title}
                    person={review.person}
                    link={review.link}
                    image={review.image}
                  />
                </picture>
              );
            })}
          </div>

          <Link href={'/reviews'}>
            <a>
              <Button fill={true} big={false} className={styles.btnAllCases}>
                Все материалы
              </Button>
            </a>
          </Link>
        </>
      )}
      <Modal active={activeModal} setActive={setActiveModal} background={'secondary'}>
        {activeModal && embedId.length && (
          <YoutubeEmbed embedId={embedId} rotate={widthScreen < breakPoints.isTablet} />
        )}
      </Modal>
      <div id={'services'} />
    </WrapperHomeComponent>
  );
};

export default ReviewsPageComponent;
