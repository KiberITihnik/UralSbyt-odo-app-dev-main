import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './final-card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

interface FinallyCardPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  body: {
    title?: string;
    description?: string;
    link?: string;
  };
}

export const FinallyCard: FC<FinallyCardPropsType> = ({
  className,
  body: { title = '', description = '', link = '' },
}) => {
  const stylesCard = classNames(className, styles.wrapper, {});

  return (
    <div className={stylesCard}>
      {/*<Link href={link}>*/}
      {/*  <a>*/}
      {title.length > 0 && <h6 className={styles.title}>{title}</h6>}
      {description.length > 0 && <p className={styles.description}>{description}</p>}
      {/*  </a>*/}
      {/*</Link>*/}

      {link?.length > 0 && (
        // <Link href={link}>
        //   <a>
        <div className={styles.footer}>
          <Image src={'/icons/arrow.png'} width={48} height={48} alt="" />
        </div>
        //   </a>
        // </Link>
      )}
    </div>
  );
};

export default FinallyCard;
