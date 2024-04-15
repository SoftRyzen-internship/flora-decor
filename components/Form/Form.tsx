'use client';

import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormData } from '../InputField/types';
import { FormInput } from './types';

import { InputField } from '../InputField';
import { Button } from '../Button';

import { formSchema } from '@/utils/formSchema';
import form from '@/data/form.json';

export const Form: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });
  const { errors } = methods.formState;
  const { watch, setValue } = methods;

  const formData = form as {
    inputFieldsUp: FormInput[];
    inputFieldsDown: FormInput[];
    checkText: string;
  };
  const { inputFieldsUp, inputFieldsDown, checkText } = formData;

  useFormPersist('FormData', {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    methods.reset();
    sessionStorage.removeItem('FormData');
    console.log(data);
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  methods.watch(data => {
    setIsDisabled(!data.checkbox);
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full xl:w-[541px]"
        >
          <div className="w-full flex flex-col xl:flex-row  justify-center gap-5 mb-5 md:mb-[30px] md:gap-[30px] xl:gap-[17px]">
            {' '}
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
            {' '}
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
          <div className="relative flex flex-row  ml-10 mb-[30px] md:mb-[40px]">
            <input
              type="checkbox"
              {...methods.register('checkbox')}
              id="checkbox"
              className="mr-4 visually-hidden"
            />
            <label htmlFor="checkbox" className="">
              <span className=" cursor-pointer text-justify font-geologica text-[14px] leading-[1.4] tracking-[-0.28px] font-medium md:text-subtitleMd   text-main">
                {checkText}
              </span>
              <span
                className={`${errors.checkbox ? 'custom-checkbox-error' : 'custom-checkbox'} `}
              ></span>
            </label>
          </div>
          <Button isLink={false} isBtn isDisabled={isDisabled} type="submit">
            Замовити
          </Button>{' '}
        </form>
      </FormProvider>
    </div>
  );
};
