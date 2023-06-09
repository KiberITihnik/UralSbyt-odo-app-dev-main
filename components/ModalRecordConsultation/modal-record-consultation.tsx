import { FC } from 'react';
import styles from './modal-record-consultation.module.css';

import Button from '../Button/button';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import MaskedInput from 'react-text-mask';
import { ModalRecordConsultationProps } from './modalRecordConsultation.props';
import { sendForm } from '../../lib/utils';
import { ContactEnum } from '../../types/types';

const phoneRegExp = /^(\+[1-9])?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const initialValues = {
  name: '',
  email: '',
  phone: '',
  city: '',
  connect: 'phone',
  agreement: [''],
};

const phoneSchema = Yup.string()
  .trim()
  .strict(true)
  .matches(phoneRegExp, 'Неверный номер телефона')
  .min(14, 'Too short')
  .max(14, 'Vey long')
  .required('Обязательное поле');

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().max(255, 'не более 255 символов').required('А как к Вам обращаться?'),
  email: Yup.string().email('Указан некоректный Email').required('Обязательное поле'),
  phone: phoneSchema,
  city: Yup.string()
    .trim()
    .min(2, 'Не менее 2 символов')
    .max(255, 'не более 255 символов')
    .required('Обязательное поле'),
  connect: Yup.string(),
  agreement: Yup.array().length(2, 'must be checked').required('Обязательное поле'),
});

const ModalRecordConsultation: FC<ModalRecordConsultationProps> = ({ setActive }: any) => {
  const formik = useFormik({
    initialValues,

    onSubmit: (values, { resetForm }) => {
      handleSubmit(formik.values);
      resetForm({ values: initialValues });
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = (values: any) => {
    sendForm(values, ContactEnum.telephone)
      .then((res) => setActive(false))
      .catch((e) => console.log(e));
  };

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <>
      <div className={styles.header}>
        <h3>Запись на консультацию</h3>
      </div>
      <form action="" className={styles.wrapper} onSubmit={formik.handleSubmit}>
        <div className={styles.fields}>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames(styles.input, {
              [styles.errorInput]: formik.errors.name && formik.touched.name,
              [styles.correctInput]: !formik.errors.name && formik.touched.name,
            })}
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ваше имя"
          />

          {formik.errors.name && <span className={styles.textDanger}>{formik.errors.name}</span>}

          <MaskedInput
            mask={phoneNumberMask}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames(styles.input, {
              [styles.errorInput]: formik.errors.phone && formik.touched.phone,
              [styles.correctInput]: !formik.errors.phone && formik.touched.phone,
            })}
            id="phone"
            name="phone"
            type="tel"
            placeholder="Телефонный номер для связи"
          />
          {formik.errors.phone && <span className={styles.textDanger}>{formik.errors.phone}</span>}

          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames(styles.input, {
              [styles.errorInput]: formik.errors.email && formik.touched.email,
              [styles.correctInput]: !formik.errors.email && formik.touched.email,
            })}
            id="email"
            name="email"
            type="email"
            placeholder="Адрес email"
          />

          {formik.errors.email && <span className={styles.textDanger}>{formik.errors.email}</span>}

          <input
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames(styles.input, {
              [styles.errorInput]: formik.errors.city && formik.touched.city,
              [styles.correctInput]: !formik.errors.city && formik.touched.city,
            })}
            id="city"
            name="city"
            type="text"
            placeholder="Город"
          />

          {formik.errors.city && <span className={styles.textDanger}>{formik.errors.city}</span>}
        </div>

        <div className={styles.footer}>
          <p>Предпочтительный способ связи:</p>

          <span className={styles.primaryLink}>
            <div className={styles.formRadio}>
              <input
                type="radio"
                id="contactChoice1"
                name="connect"
                value="phone"
                defaultChecked={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="contactChoice1">Телефон</label>
            </div>

            <div className={styles.formRadio}>
              <input
                type="radio"
                id="contactChoice2"
                name="connect"
                value="whatsApp"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="contactChoice2">WhatsApp</label>
            </div>
          </span>
        </div>
        <div className={styles.checkPersonalData}>
          <input type="checkbox" name="agreement" onChange={formik.handleChange} />
          <span>
            Даю согласие на обработку персональных данных
            {/*<Link href={"/personal"}>обработку персональных данных</Link>*/}
          </span>
        </div>

        <div className={styles.btnGroup}>
          <span></span>
          <Button
            type={'submit'}
            fill={true}
            disabled={!!Object.keys(formik.errors).length || !Object.keys(formik.touched).length}>
            Записаться
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalRecordConsultation;
