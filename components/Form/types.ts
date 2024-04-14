import { FormData } from '../InputField/types';

export type FormInput = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type: 'text' | 'phone' | 'email' | 'textarea' | 'checkbox';
};
