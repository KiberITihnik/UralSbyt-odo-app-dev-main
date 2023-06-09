import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonPropsType } from './button.props';
import styles from './button.module.css';

const Button: FC<ButtonPropsType> = ({
  fill = false,
  big = false,
  invert = false,

  children,
  className,
  ...props
}: ButtonPropsType): JSX.Element => {
  const buttonStyle = classNames(styles.button, className, {
    [styles.fill]: fill,
    [styles.big]: big,
    [styles.invert]: invert,
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
