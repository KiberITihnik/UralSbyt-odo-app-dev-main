import React, { FC } from 'react';

import styles from './layout.module.css';

import { LayoutProps } from './layout.props';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.body}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
