import { FC } from 'react';
import { InputPropsType } from './input.props';
import styles from './input.module.css';

const Input: FC<InputPropsType> = ({ value, type, placeholder, onChange, required }) => {
  return (
    <></>
    // <input
    //   type={type}
    //   placeholder={placeholder}
    //   className={styles.input}
    //   value={value}
    //   required={required}
    //   onChange={onChange}
    // />
  );
};

export default Input;
