'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { FormData } from './types';

type InputFieldPropsType = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type: 'text' | 'phone' | 'email' | 'textarea' | 'checkbox';
  className?: string;
};

export const InputField: React.FC<InputFieldPropsType> = ({
  name,
  label,
  placeholder,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  if (type === 'textarea') {
    return (
      <div className="relative flex flex-col gap-1">
        <label className="font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-subtitle">
          {label}
        </label>
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className={`box-border rounded-[10px] border-2  utilities focus:border-[#8EA58E] resize-none h-[150px] outline-none ${errors[name] ? 'border-error' : 'border-transparent'} px-4 py-[16px] w-full font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-main placeholder:text-placeholder `}
        />
        {errors[name] && (
          <p className="error-message absolute bottom-[-18px] md:bottom-[-24px] left-5 text-[12px] font-geologica font-normal leading-[1.25]  text-error ">
            {errors[name]?.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col w-full gap-1">
      <label className="font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-subtitle">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`box-border rounded-[10px] border-2  utilities focus:border-[#8EA58E] outline-none ${errors[name] ? 'border-error' : 'border-transparent'} px-4 py-[16px] w-full font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-main placeholder:text-placeholder `}
      />
      {errors[name] && (
        <p className="error-message absolute bottom-[-18px] md:bottom-[-24px] left-5 text-[12px] font-geologica font-normal leading-[1.25]  text-error ">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
