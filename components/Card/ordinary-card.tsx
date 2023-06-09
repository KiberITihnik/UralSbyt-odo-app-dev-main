import { FC } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CardSolutionType, SolutionType } from '../../types/types';

interface OrdinaryPropsType {
  bgColor?: string;
  stylesCard: string;
  card: CardSolutionType;
}

const OrdinaryCard: FC<OrdinaryPropsType> = ({
  bgColor,
  stylesCard,

  card,
}) => {
  const { body, solution, title, id, user } = card;

  return (
    <>
      {!!user && (
        <div className={stylesCard} style={{ background: bgColor }}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Image
                src={user.avatar}
                className={styles.imageHeader}
                alt={user.author}
                width={400}
                height={300}
              />

              <div className={styles.personal}>
                <h6>{user.author}</h6>
                <p>{user.jobPosition}</p>
              </div>
            </div>
            <Link href={'/cases/' + id}>
              <a>
                <div className={styles.title}>
                  <p>{solution.title}</p>
                  <h4>{title}</h4>
                </div>

                <div className={styles.body}>
                  <div className={styles.truncateText}>{body}</div>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.footer}>
            <Link href={'/cases/' + id}>
              <a>Читать далее</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdinaryCard;
