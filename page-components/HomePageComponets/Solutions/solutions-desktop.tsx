/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './solutions.module.css';

import { Typo, Button, Card, FinallyCard } from '../../../components/utils/exportComponents';

import { WrapperHomeComponent } from '../wrapperHomeComponent';
import { solutions } from '../../../data/static.data';
import { SolutionsCardsContext } from './solutions';
import classNames from 'classnames';
import { shuffleCard } from '../../../lib/utils';
import { PageComponentPropsType } from '../utils/pageComponents.props';

const SolutionDesktopPageRender: FC<PageComponentPropsType> = ({ bgColor = 'var(--primary)' }) => {
  const [contextCards, setContextCard] = useContext(SolutionsCardsContext);

  if (contextCards === null || contextCards?.length == 0) return <>Loading ...</>;

  const [activeItem, setActiveItem] = useState<null | number>(null);
  const [viewCards, setViewCards] = useState(
    // shuffleCard([...contextCards]).slice(0, 4)
    [...contextCards].slice(0, 4),
  );

  useEffect(() => {
    setViewCards(contextCards.filter((c) => c.solution.id === activeItem));
    if (activeItem === null) {
      setViewCards(shuffleCard([...contextCards]).slice(0, 4));
    }
  }, [activeItem, contextCards]);

  return (
    <>
      <WrapperHomeComponent bgColor={bgColor}>
        <Typo txtStyle={'H1'} className={styles.title}>
          Кладовая решений
        </Typo>
        <Typo txtStyle={'H4'} className={styles.subtitle}>
          Возьмите деньги под свой контроль. <br />
          Расскажем о возможностях получения кредита дешевле, чем в банке.
        </Typo>
        <ul className={styles.menu}>
          <li>
            <Button
              className={classNames(styles.menuItem, {
                [styles.menuItemActive]: activeItem === null,
              })}
              invert={true}
              onClick={() => setActiveItem(null)}>
              Все кейсы
            </Button>
          </li>

          {solutions.map((s) => {
            return (
              <li key={s.id}>
                <Button
                  className={classNames(styles.menuItem, {
                    [styles.menuItemActive]: activeItem === s.id,
                  })}
                  invert={true}
                  onClick={() => setActiveItem(s.id)}>
                  {s.title}
                </Button>
              </li>
            );
          })}
        </ul>

        <div className={styles.cards}>
          {!!viewCards[0] && <Card size={'BIG'} className={styles.big} card={viewCards[0]} />}
          {!!viewCards[1] && <Card className={styles.ordinary} card={viewCards[1]} />}
          {!!viewCards[2] && <Card className={styles.ordinary} card={viewCards[2]} />}

          {!!viewCards[3] && <Card className={styles.ordinary} card={viewCards[3]} />}
          <Link href={'/cases'}>
            <a>
              <FinallyCard
                body={{ title: 'Посмотреть все кейсы', link: '/cases' }}
                className={styles.end}
              />
            </a>
          </Link>
        </div>
      </WrapperHomeComponent>
    </>
  );
};

export default SolutionDesktopPageRender;
