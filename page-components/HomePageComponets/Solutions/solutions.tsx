import { createContext, FC, useContext, useEffect, useState } from 'react';

import { PageComponentPropsType } from '../utils/pageComponents.props';

import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

import {
  SolutionDesktopPageRender,
  SolutionMobilePageRender,
  SolutionTabletPageRender,
} from './utils/exportSolutions';

import { cardCases } from '../../../data/static.data';
import { CardSolutionType } from '../../../types/types';

export const SolutionsCardsContext = createContext<
  [context: CardSolutionType[] | null, setContext: (n: any) => void]
>([null, () => undefined]);

const SolutionPageComponent: FC<PageComponentPropsType> = () => {
  const [contextCards, setContextCards] = useState<CardSolutionType[]>(cardCases);

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
    <SolutionsCardsContext.Provider value={[contextCards, setContextCards]}>
      {widthScreen === breakPoints.isBigScreen && <SolutionDesktopPageRender />}
      {widthScreen === breakPoints.isDesktopOrLaptop && <SolutionDesktopPageRender />}
      {widthScreen === breakPoints.isTablet && <SolutionTabletPageRender />}
      {widthScreen === breakPoints.isMobile && <SolutionMobilePageRender />}
    </SolutionsCardsContext.Provider>
  );
};

export default SolutionPageComponent;
