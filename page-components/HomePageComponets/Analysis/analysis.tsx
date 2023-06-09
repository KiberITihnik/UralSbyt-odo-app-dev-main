import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { PageComponentPropsType } from '../utils/pageComponents.props';

import styles from './analysis.module.css';
import { WrapperHomeComponent } from '../wrapperHomeComponent';

import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

import {
  Typo,
  Button,
  YoutubeEmbed,
  Modal,
  VideoCard,
} from '../../../components/utils/exportComponents';

import { videos } from './analysisVideos';

const AnalysisPageComponent: FC<PageComponentPropsType> = ({
  bgColor = 'var(--secondary-lite)',
}) => {
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
            Разбор кейсов от эксперта
          </Typo>
          <Typo txtStyle={'H4'} className={styles.subtitle}>
            Здесь вы найдете видео от эксперта в мире финансового брокериджа
            <br />с алгоритмом решений основных проблем в получении кредита
          </Typo>
        </>
      )}

      {widthScreen <= breakPoints.isTablet && (
        <div id={'expert'}>
          <Typo txtStyle={'H2'} className={styles.title}>
            Разбор кейсов от эксперта
          </Typo>
          <Typo txtStyle={'H5'} className={styles.subtitle}>
            Здесь вы найдете видео от эксперта в мире финансового брокериджа <br />с алгоритмом
            решений основных проблем в получении кредита
          </Typo>
        </div>
      )}

      <div className={styles.header}>
        {widthScreen >= breakPoints.isDesktopOrLaptop && (
          <Image src={'/analysis-1.png'} width={410} height={280} className={styles.headerImage} />
        )}

        {widthScreen <= breakPoints.isTablet && (
          <>
            <picture className={styles.headerImage}>
              <Image src={'/analysis-1.png'} width={260} height={180} />
            </picture>
          </>
        )}

        <div className={styles.body}>
          <h6>Полухин Андрей Сергеевич</h6>
          <p>
            «Для меня важно, чтобы клиенты могли смотреть на себя глазами банка и управлять
            собственным финансовым положением...»
          </p>
        </div>
      </div>

      <div className={styles.table}>
        {widthScreen >= breakPoints.isDesktopOrLaptop && (
          <>
            {videos.slice(-6).map((v, index) => {
              return (
                <div onClick={() => handleClick(v.linkId)} key={index}>
                  <VideoCard
                    className={styles.videoCard}
                    title={v.title}
                    description={v.description}
                  />
                </div>
              );
            })}
          </>
        )}

        {widthScreen === breakPoints.isTablet && (
          <>
            {videos.slice(-2).map((v, index) => {
              return (
                <div onClick={() => handleClick(v.linkId)} key={index}>
                  <VideoCard
                    className={styles.videoCard}
                    key={index}
                    title={v.title}
                    description={v.description}
                  />
                </div>
              );
            })}
          </>
        )}

        {widthScreen === breakPoints.isMobile && (
          <>
            {videos.slice(-1).map((v, index) => {
              return (
                <div onClick={() => handleClick(v.linkId)} key={index}>
                  <VideoCard
                    className={styles.videoCard}
                    key={index}
                    title={v.title}
                    description={v.description}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>

      {/*<Button fill={true} big={false} className={styles.btnAllCases}>*/}
      {/*  Смотреть все видео*/}
      {/*</Button>*/}

      <Modal active={activeModal} setActive={setActiveModal} background={'secondary'}>
        {activeModal && embedId.length && (
          <YoutubeEmbed embedId={embedId} rotate={widthScreen < breakPoints.isTablet} />
        )}
      </Modal>
    </WrapperHomeComponent>
  );
};

export default AnalysisPageComponent;
