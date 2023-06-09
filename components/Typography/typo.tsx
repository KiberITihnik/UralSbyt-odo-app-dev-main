import { FC } from 'react';
import classNames from 'classnames';
import styles from './typo.module.css';
import { TypoPropsType } from './typo.props';

const Typo: FC<TypoPropsType> = ({ children, className, txtStyle }) => {
  const styleString = classNames(className, {
    [styles.h1]: txtStyle === 'H1',
    [styles.h2]: txtStyle === 'H2',
    [styles.h3]: txtStyle === 'H3',
    [styles.h4]: txtStyle === 'H4',
    [styles.h5]: txtStyle === 'H5',
    [styles.h6]: txtStyle === 'H6',
  });

  return (
    <>
      {txtStyle === 'H1' && <h1 className={styleString}>{children}</h1>}
      {txtStyle === 'H2' && <h2 className={styleString}>{children}</h2>}
      {txtStyle === 'H3' && <h3 className={styleString}>{children}</h3>}
      {txtStyle === 'H4' && <h4 className={styleString}>{children}</h4>}
      {txtStyle === 'H5' && <h5 className={styleString}>{children}</h5>}
      {txtStyle === 'H6' && <h6 className={styleString}>{children}</h6>}
    </>
  );
};

export default Typo;
