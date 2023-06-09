import { useMediaQuery } from 'react-responsive';
import { breakPoints } from './responsiveBreakPoints';

export const useResponsive = (): [number] => {
  // const isWideScreen = useMediaQuery({
  //     minWidth: breakPoints.isBigScreen,
  // });

  const isBigScreen = useMediaQuery({
    minWidth: breakPoints.isBigScreen, // >1366
  });

  const isDesktopOrLaptop = useMediaQuery({
    maxWidth: breakPoints.isBigScreen, // 1366
    minWidth: breakPoints.isDesktopOrLaptop, // 1280
  });

  const isTablet = useMediaQuery({
    maxWidth: breakPoints.isDesktopOrLaptop, //1280
    minWidth: breakPoints.isTablet, // 768
  });
  const isMobile = useMediaQuery({
    maxWidth: breakPoints.isTablet, //360
  });

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // console.log(
  //   // "isWideScreen",
  //   // isWideScreen,
  //   "isBigScreen",
  //   isBigScreen,
  //   isDesktopOrLaptop,
  //   "isDesktopOrLaptop",
  //   isDesktopOrLaptop,
  //   "isTablet",
  //   isTablet,
  //   "isMobile",
  //   isMobile,
  //   "isPortrait",
  //   isPortrait
  // );

  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  // if (isWideScreen) return [breakPoints.isWideScreen];
  if (isBigScreen) return [breakPoints.isBigScreen];
  if (isDesktopOrLaptop) return [breakPoints.isDesktopOrLaptop];
  if (isTablet) return [breakPoints.isTablet];
  if (isMobile) return [breakPoints.isMobile];

  return [breakPoints.isBigScreen];
};
