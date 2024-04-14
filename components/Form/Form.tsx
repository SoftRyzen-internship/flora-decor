// 'use client';

import React from 'react';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/utils/formSchema';
import { FormData } from '../InputField/types';
import { InputField } from '../InputField';
import { Button } from '../Button';

import form from '@/data/form.json';

import { FormInput } from './types';

export const Form: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });
  const formData = form as {
    inputFieldsUp: FormInput[];
    inputFieldsDown: FormInput[];
    checkText: string;
  };
  const { inputFieldsUp, inputFieldsDown, checkText } = formData;
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    methods.reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col xl:flex-row gap-5 mb-5 md:mb-[30px] md:gap-[30px] xl:gap-[17px]">
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
          <div className="relative mb-[30px] md:mb-[40px]">
            <input
              type="checkbox"
              {...methods.register('checkbox')}
              id="checkbox"
              className="mr-4"
            />
            <label htmlFor="checkbox">
              <span className=" cursor-pointer font-geologica text-[14px] leading-[1.4] tracking-[-0.28px] font-medium md:text-subtitleMd   text-main">
                {checkText}
              </span>
              <span className="custom-checkbox"></span>
            </label>
          </div>
          <Button
            isLink={false}
            onClick={() => {}}
            isBtn
            isDisabled={false}
            type="submit"
          >
            Замовити
          </Button>{' '}
        </form>
      </FormProvider>
    </div>
  );
};
