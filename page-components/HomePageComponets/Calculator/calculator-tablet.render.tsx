import { FC } from 'react';
import Image from 'next/image';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import styles from './calculator.module.css';
import { Typo, Button } from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';

const CalculatorTabletRender: FC<PageComponentPropsType> = ({
  bgColor = 'var(--secondary-lite)',
}) => {
  return (
    <WrapperHomeComponent bgColor={bgColor}>
      <div className={styles.info}>
        <Typo txtStyle={'H2'}>Кредитный калькулятор</Typo>
        <Typo txtStyle={'H5'}>
          Процентные ставки меняются. А в кредите важно всё: ставка, срок, сумма кредита и
          ежемесячного платежа.
        </Typo>
        <Typo txtStyle={'H5'}>
          Раcсчитайте комфортные для себя условия по кредиту, актуальные на данный момент.
        </Typo>
        <Button fill={true} big={false}>
          Расcчитать
        </Button>
      </div>

      <div className={styles.image}>
        <Image src={'/bg-calculator.png'} width={539} height={579} />
      </div>
    </WrapperHomeComponent>
  );
};

export default CalculatorTabletRender;
