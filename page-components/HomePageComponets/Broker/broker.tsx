import React, { FC, useEffect, useState } from 'react';

import { BrokerPropsType } from '../utils/pageComponents.props';

import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

import {
  BrokerBigScreenRender,
  BrokerDesktopRender,
  BrokerTabletRender,
  BrokerMobileRender,
} from './utils/exportBroker';

import { ModalRecordConsultation, Modal } from '../../../components/utils/exportComponents';

const Broker: FC<BrokerPropsType> = ({ bgColor = 'var(--white)' }) => {
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
    <>
      {widthScreen === breakPoints.isBigScreen && (
        <BrokerBigScreenRender active={activeModal} setActive={setActiveModal} />
      )}
      {widthScreen === breakPoints.isDesktopOrLaptop && (
        <BrokerDesktopRender active={activeModal} setActive={setActiveModal} />
      )}
      {widthScreen === breakPoints.isTablet && (
        <BrokerTabletRender active={activeModal} setActive={setActiveModal} />
      )}
      {widthScreen === breakPoints.isMobile && (
        <BrokerMobileRender active={activeModal} setActive={setActiveModal} />
      )}

      {/* TODO fix to context home page */}
      <Modal active={activeModal} setActive={setActiveModal}>
        <ModalRecordConsultation setActive={setActiveModal} />
      </Modal>
    </>
  );
};

export default Broker;
