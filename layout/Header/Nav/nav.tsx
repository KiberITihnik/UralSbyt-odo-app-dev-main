import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import styles from './nav.module.css';

import { headerMenu } from '../../../data/static.data';

const Nav: React.FC = () => {
  const router = useRouter();

  return (
    <ul className={styles.nav}>
      {headerMenu.map((m) => {
        return (
          <li
            key={m._id}
            className={classNames(styles.navItem, {
              [styles.navItemActive]: router.pathname === m.link,
            })}>
            <Link href={m.link}>
              <a>
                {m.title}
                {/*<Typo txtStyle={"H5"}>{m.title}</Typo>*/}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
