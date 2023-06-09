import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from 'react';
import styles from './review-card.module.css';

import { useResponsive } from '../../hooks/useResponsive';
import { breakPoints } from '../../hooks/responsiveBreakPoints';
import Image from 'next/image';

export interface ReviewCardPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  person: string;
  link: string;
  image: string;
}

const ReviewCard: FC<ReviewCardPropsType> = ({ title, person, link, image, className }) => {
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
    <div className={[styles.card, className].join(' ')}>
      {/*<div className={styles.picture}>*/}
      {/*<Image src={image} width={300} height={440} alt="" />*/}
      <Image src={image} alt="" className={styles.picture} width={10} height={10} />
      {/*</div>*/}
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.person}>{person}</div>
        </div>
        {/*<div className={styles.footer}>*/}
        {/*  <Link href={link} className={styles.link}>*/}
        {/*    <a>*/}
        {/*      <Image*/}
        {/*        src={"/icons/play_simple.png"}*/}
        {/*        height={64}*/}
        {/*        width={64}*/}
        {/*        alt=""*/}
        {/*      />*/}
        {/*    </a>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ReviewCard;
