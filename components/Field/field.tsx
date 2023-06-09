import { FC } from 'react';
import { FieldPropsType } from './field.props';
import Input from '../Input/input';
import styles from './field.module.css';

const Field: FC<FieldPropsType> = ({ label, children }) => {
  return (
    <>
      {/*<label className={styles.label}>*/}
      {/*  <span>{label}</span>*/}
      {/*</label>*/}
      {/*<Input type={"email"} placeholder={"Email"} />*/}
    </>
  );
};

export default Field;
