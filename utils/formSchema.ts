import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове")
    .min(2, 'Мінімальна довжина 2 символи')
    .max(30, 'Максимальна довжина 30 символів')
    .matches(/^[\sA-Za-zА-Яа-яҐґЄєІіЇїʼ`-]+$/, "Введіть коректне ім'я")
    .transform(value => value.trim()),
  phone: yup
    .string()
    .required("Номер телефону обов'язковий")
    .matches(/^\+?\d{10,12}$/, 'Телефон має бути валідним')
    .max(13, 'Максимальна довжина 13 символів'),
  email: yup
    .string()
    .required("E-mail обов'язковий")
    .matches(
      /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Введена адреса недійсна',
    ),
  message: yup
    .string()
    .required("Ваше повідомлення обов'язкове")
    .max(500, 'У тексті має бути не більше 500 символів')
    .transform(value => value.trim()),
  checkbox: yup
    .boolean()
    .required('required')
    .oneOf([true], "Обов'язкове поле для підтвердження"),
});
