'use client';

import { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/utils/formSchema';

import { InputField } from '../InputField';
import { Button } from '../Button';
import { Loader } from '@/components/Loader';

import { FormData } from '../InputField/types';
import { FormInput } from './types';

import form from '@/data/form.json';

export const Form = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const { errors, isSubmitting } = methods.formState;

  const formData = form as {
    inputFieldsUp: FormInput[];
    inputFieldsDown: FormInput[];
    checkText: string;
    labelBtn: string;
  };
  const { inputFieldsUp, inputFieldsDown, checkText, labelBtn } = formData;

  const onSubmit: SubmitHandler<FormData> = () => {
    try {
      methods.reset();
      localStorage.removeItem('FormData');
    } catch (error) {
      console.log('error');
    }
  };

  const isDisabled = !methods.watch().checkbox;

  methods.watch(data => {
    localStorage.setItem('FormData', JSON.stringify(data));
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('FormData');
    if (savedFormData !== null) {
      const result = JSON.parse(savedFormData);
      methods.setValue('name', result.name);
      methods.setValue('phone', result.phone);
      methods.setValue('email', result.email);
      methods.setValue('message', result.message);
    }
  }, [methods]);

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full xl:w-[541px]"
        >
          <div className="w-full flex flex-col xl:flex-row  justify-center gap-5 mb-5 md:mb-[30px] md:gap-[30px] xl:gap-[17px]">
            {inputFieldsUp.map(input => {
              return (
                <InputField
                  key={input.name}
                  name={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5 mb-[30px] md:gap-[30px]">
            {inputFieldsDown.map(input => {
              return (
                <InputField
                  key={input.name}
                  name={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              );
            })}
          </div>
          <div className="relative flex gap-4 items-center ml-2 flex-row mb-[30px]">
            <input
              type="checkbox"
              {...methods.register('checkbox')}
              id="checkbox"
              className="w-4 h-4 mr-4 opacity-0"
            />
            <label htmlFor="checkbox">
              <span className="cursor-pointer text-justify font-geologica text-[14px] leading-[1.4] tracking-[-0.28px] font-medium md:text-subtitleMd text-main">
                {checkText}
              </span>
              <span
                className={`${errors.checkbox ? 'custom-checkbox-error' : 'custom-checkbox'} `}
              ></span>
            </label>
          </div>
          <Button isLink={false} isBtn isDisabled={isDisabled} type="submit">
            {isSubmitting ? <Loader /> : labelBtn}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
