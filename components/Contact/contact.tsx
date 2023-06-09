import React, { FC } from 'react';
import classNames from 'classnames';

import { ContactPropsType } from './contact.props';
import styles from './contact.module.css';

const Contact: FC<ContactPropsType> = ({
  children,
  className,
  ...props
}: ContactPropsType): JSX.Element => {
  const buttonStyle = classNames(styles.contact, className, {});

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Contact;
