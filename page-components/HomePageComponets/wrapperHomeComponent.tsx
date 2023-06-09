import React, { Component, FC, PropsWithChildren } from 'react';
import styles from './wrapperHomeComponent.module.css';

export interface WrapperHomeComponentPropsType extends PropsWithChildren {
  bgColor?: string;
}

export const WrapperHomeComponent: FC<WrapperHomeComponentPropsType> = ({
  children,
  bgColor = 'var(--white)',
}) => {
  return (
    <div className={styles.wrapper} style={{ background: bgColor }}>
      {children}
    </div>
  );
};

export const withWrapperComponent = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withWrapper(props: T): JSX.Element {
    return (
      <WrapperHomeComponent>
        <Component {...props} />
      </WrapperHomeComponent>
    );
  };
};
