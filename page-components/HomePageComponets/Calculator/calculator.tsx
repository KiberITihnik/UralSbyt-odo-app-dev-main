import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { PageComponentPropsType } from '../utils/pageComponents.props';

import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

import {
  CalculatorBigScreenRender,
  CalculatorDesktopRender,
  CalculatorMobileRender,
  CalculatorTabletRender,
} from './utils/exportCalculator';

const CalculatorPageComponent: FC<PageComponentPropsType> = ({
  bgColor = 'var(--secondary-lite)',
}) => {
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
      {widthScreen === breakPoints.isBigScreen && <CalculatorBigScreenRender />}
      {widthScreen === breakPoints.isDesktopOrLaptop && <CalculatorDesktopRender />}
      {widthScreen === breakPoints.isTablet && <CalculatorTabletRender />}
      {widthScreen === breakPoints.isMobile && <CalculatorMobileRender />}
    </>
  );
};

export default CalculatorPageComponent;
