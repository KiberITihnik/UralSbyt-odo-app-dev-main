import React, { FC } from 'react';
import { SocialPropsType } from './social.props';
import styles from './social.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { social } from '../../data/static.data';

const Social: FC<SocialPropsType> = ({ className }) => {
  return (
    <div className={className}>
      <ul className={styles.social}>
        {social.map((s) => {
          return (
            <li key={s.title}>
              <Link href={s.link}>
                <a>
                  <Image src={s.icon} alt={s.title} width={32} height={32} />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
