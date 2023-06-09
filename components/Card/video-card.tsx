import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './video-card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

interface VideoCardPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description?: string;
  // link: string;
}

const VideoCard: FC<VideoCardPropsType> = ({
  title,
  description,

  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.footer}>
        <Image src={'/icons/play.png'} height={64} width={64} alt="" />

        <span>Смотреть</span>
      </div>
    </div>
  );
};

export default VideoCard;
