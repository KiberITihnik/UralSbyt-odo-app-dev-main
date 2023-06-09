import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './block.module.css';
import { BlockProps } from './block.props';

export const Block = ({ children, className }: BlockProps): JSX.Element => {
  const stylesBlock = classNames(styles.wrapper, className);
  return <div className={stylesBlock}>{children}</div>;
};

export const withBlock = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withBlockComponent(props: T): JSX.Element {
    return (
      <Block>
        <Component {...props} />
      </Block>
    );
  };
};
