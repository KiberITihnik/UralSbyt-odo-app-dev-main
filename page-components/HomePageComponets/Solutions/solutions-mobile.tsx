import { FC, useContext, useState } from 'react';
import Link from 'next/link';

import { PageComponentPropsType } from '../utils/pageComponents.props';
import styles from './solutions.module.css';

import { Typo, Button, Card } from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { cardCases } from '../../../data/static.data';
import { SolutionsCardsContext } from './solutions';
import { shuffleCard } from '../../../lib/utils';

const SolutionMobilePageRender: FC<PageComponentPropsType> = ({ bgColor = 'var(--primary)' }) => {
  const [contextCards] = useContext(SolutionsCardsContext);

  if (contextCards === null || contextCards?.length == 0) return <>Loading ...</>;

  const [viewCards] = useState(shuffleCard([...contextCards]).slice(0, 4));

  return (
    <>
      <WrapperHomeComponent bgColor={bgColor}>
        <Typo txtStyle={'H2'} className={styles.title}>
          Кладовая решений
        </Typo>
        <Typo txtStyle={'H5'} className={styles.subtitle}>
          Возьмите деньги под свой контроль. <br />
          Расскажем о возможностях получения кредита дешевле, чем в банке.
        </Typo>

        <div className={styles.cards}>
          {!!viewCards[0] && <Card size={'BIG'} className={styles.big} card={viewCards[0]} />}
          {!!viewCards[1] && <Card className={styles.big} card={viewCards[1]} />}
        </div>
        <Link href={'/cases'}>
          <a>
            <Button big={false} fill={true} className={styles.btnAllCases}>
              Посмотреть все кейсы
            </Button>
          </a>
        </Link>
      </WrapperHomeComponent>
    </>
  );
};

export default SolutionMobilePageRender;
