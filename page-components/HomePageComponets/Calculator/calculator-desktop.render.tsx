import { FC } from 'react';
import Image from 'next/image';

import styles from './calculator.module.css';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import { Typo, Button } from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';

const CalculatorDesktopRender: FC<PageComponentPropsType> = ({
  bgColor = 'var(--secondary-lite)',
}) => {
  return (
    <WrapperHomeComponent bgColor={bgColor}>
      <div className={styles.info}>
        <Typo txtStyle={'H1'}>Кредитный калькулятор</Typo>
        <Typo txtStyle={'H4'}>
          Процентные ставки меняются. А в кредите важно всё: ставка, срок, сумма кредита и
          ежемесячного платежа.
        </Typo>
        <Typo txtStyle={'H4'}>
          Раcсчитайте комфортные для себя условия по кредиту, актуальные на данный момент.
        </Typo>
        <Button fill={true} big={true}>
          Расcчитать
        </Button>
      </div>

      <div className={styles.image}>
        <Image src={'/bg-calculator.png'} width={890} height={980} />
      </div>
    </WrapperHomeComponent>
  );
};

export default CalculatorDesktopRender;
