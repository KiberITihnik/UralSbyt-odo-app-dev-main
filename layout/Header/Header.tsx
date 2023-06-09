import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { PropsType } from '../../types/props';
import styles from './Header.module.css';

import Brand from '../../components/Brand/brand';
import Nav from './Nav/nav';
import NavRightSide from './RightSide/nav-right';
import { useResponsive } from '../../hooks/useResponsive';
import { breakPoints } from '../../hooks/responsiveBreakPoints';
import MobileNav from './MobileNav/mobile-nav';

const Header = ({ ...props }: PropsType): JSX.Element => {
  const [responsive] = useResponsive();
  const [widthScreen, setWidthScreen] = useState(breakPoints.isBigScreen);
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthScreen(responsive);
    } else {
      setWidthScreen(breakPoints.isBigScreen);
    }
  }, [responsive]);

  return (
    <header className={classNames(props.className, [styles.header])}>
      <Brand />

      {widthScreen >= breakPoints.isTablet && (
        <>
          <Nav />
          <NavRightSide />
        </>
      )}

      {widthScreen < breakPoints.isTablet && (
        <>
          <picture onClick={() => setActiveMenu(!activeMenu)}>
            <Image src="/icons/menu.png" width={24} height={24} />
          </picture>
          <MobileNav active={activeMenu} setActive={setActiveMenu} />
        </>
      )}
    </header>
  );
};

export default Header;
