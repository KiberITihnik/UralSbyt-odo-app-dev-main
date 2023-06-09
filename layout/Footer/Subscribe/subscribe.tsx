import { FC, useEffect, useState } from 'react';
import styles from '../Footer-left/footer-left.module.css';

import Button from '../../../components/Button/button';
import { SubscribeProps } from './subscribe.props';
import { useResponsive } from '../../../hooks/useResponsive';
import { breakPoints } from '../../../hooks/responsiveBreakPoints';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { sendForm } from '../../../lib/utils';
import { ContactEnum } from '../../../types/types';

const Subscribe: FC<SubscribeProps> = ({ className }) => {
  const [responsive] = useResponsive();

  const [sendData, setSendData] = useState(true);

  const handleSubmit = (values: any) => {
    setSendData(false);

    setTimeout(
      () =>
        sendForm(values, ContactEnum.email)
          .then(() => {
            console.log('data send');
            setSendData(false);
          })
          .catch((e) => console.log(e)),
      60 * 1000,
    );
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(formik.values);
      resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Указан неверный email').required('Обязательное поле'),
    }),
  });

  return (
    <div className={className}>
      <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
        <>
          <label className={styles.label}>
            <span>Подпишитесь на полезные письма</span>
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className={classNames(styles.input, {
              [styles.errorInput]: formik.errors.email && formik.touched.email,
            })}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button
            type="submit"
            big={true}
            fill={true}
            disabled={
              !sendData ||
              !!Object.keys(formik.errors).length ||
              !Object.keys(formik.touched).length
            }>
            Подписаться
          </Button>
        </>
      </form>
    </div>
  );
};

export default Subscribe;
