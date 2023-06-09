import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import styles from './calculator.module.css';

import Button from '../../../components/Button/button';
import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';

const CalculatorMobileRender: FC<PageComponentPropsType> = ({
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
    <WrapperHomeComponent bgColor={bgColor}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Кредитный <br /> калькулятор
        </h1>
        <p className={styles.content}>
          Процентные ставки меняются. А в кредите важно всё: ставка, срок, сумма кредита и
          ежемесячного платежа.
        </p>
        <p className={styles.content}>
          Раcсчитайте комфортные для себя условия по кредиту, актуальные на данный момент.
        </p>
        <Button fill={true} big={false}>
          Расcчитать
        </Button>
      </div>

      <div className={styles.image}>
        <Image src={'/bg-calculator.png'} width={360} height={396} />
        {/*<img src="/bg-calculator.png" alt="" />*/}
      </div>
    </WrapperHomeComponent>
  );
};

export default CalculatorMobileRender;
