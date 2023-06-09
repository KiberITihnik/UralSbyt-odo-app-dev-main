import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Button,
  Contact,
  Modal,
  ModalRecordConsultation,
} from '../../../components/utils/exportComponents';

import styles from './nav-right.module.css';
import { phones } from '../../../data/static.data';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';
import { useResponsive } from '../../../hooks/useResponsive';

const NavRightSide = () => {
  const [activeModal, setActiveModal] = useState(false);

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
    <div className={styles.nav}>
      <ul className={styles.phones}>
        {phones.map((phone) => {
          return (
            <li key={phone.id}>
              <Contact className={styles.contactPhone}>
                <Link href={`tel:${phone.title}`}>
                  <a>{phone.title}</a>
                </Link>
              </Contact>
              <Contact className={styles.contactCity}>{`${phone.city}`}</Contact>
            </li>
          );
        })}
      </ul>
      <span>
        {widthScreen >= breakPoints.isDesktopOrLaptop && (
          <Button onClick={() => setActiveModal(true)}>Получить консультацию</Button>
        )}

        {widthScreen >= breakPoints.isTablet && widthScreen < breakPoints.isDesktopOrLaptop && (
          <>
            <span className={styles.tabletRightMenu} onClick={() => setActiveModal(true)}>
              <Image src={'/icons/message-circle.png'} width={18} height={18} layout={'fixed'} />
            </span>
          </>
        )}

        {/*{widthScreen < breakPoints.isTablet && <></>}*/}
      </span>

      <Modal active={activeModal} setActive={setActiveModal}>
        <ModalRecordConsultation setActive={setActiveModal} />
      </Modal>
    </div>
  );
};

export default NavRightSide;
