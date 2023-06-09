import { FC } from 'react';

import classNames from 'classnames';
import { CardPropsType } from './card.props';

import styles from './card.module.css';

import OrdinaryCard from './ordinary-card';

const Card: FC<CardPropsType> = ({ size = 'SMALL', card, className }) => {
  const stylesCard = classNames(className, styles.wrapper, {
    [styles.cardBig]: size === 'BIG',
    [styles.card]: size === 'SMALL',
  });

  return <OrdinaryCard bgColor={card.solution.bgColor} stylesCard={stylesCard} card={card} />;
};

export default Card;
