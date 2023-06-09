import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './mobile-nav.module.css';
import classNames from 'classnames';

import { MenuMobileProps } from './mobile-nav.props';
import { headerMenu } from '../../../data/static.data';

const MobileNav: FC<MenuMobileProps> = ({ active, setActive }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={active ? [styles.menu, styles.menuActive].join(' ') : styles.menu}
        onClick={() => setActive(false)}>
        <div className={styles.blur} />
        <ul
          className={styles.menuContent}
          onClick={(e) => {
            e.stopPropagation();
            setActive(false);
          }}>
          {headerMenu.map((m) => {
            return (
              <li
                key={m._id}
                className={classNames(styles.navItem, {
                  [styles.navItemActive]: router.pathname === m.link,
                })}>
                <Link href={m.link}>
                  <a>{m.title}</a>
                </Link>
              </li>
            );
          })}

          <li className={styles.navItem}>
            <Link href={'/'}>
              <a>Вернуться на главную</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
