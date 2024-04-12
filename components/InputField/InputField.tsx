'use client';

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormData } from './types';
import { formSchema } from '@/utils/formSchema';
//, useFormContext
type InputFieldPropsType = {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type: 'text' | 'phone' | 'email' | 'textarea' | 'checkbox';
};

export const InputField: React.FC<InputFieldPropsType> = ({
  name,
  label,
  placeholder,
  type,
}) => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext<FormData>();
  const {
    register,

    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });
  return (
    <div className="flex flex-col gap-1">
      <label className="font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-subtitle">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`relative box-border rounded-[10px] border-2  utilities focus:border-[#8EA58E] outline-none ${errors.name ? 'border-error' : 'border-transparent'} px-4 py-[16px] w-full font-geologica text-[16px] leading-[1.3] font-medium md:text-subtitleMd text-main placeholder:text-placeholder `}
      />
      {errors.name && (
        <p className="error-message absolute bottom-[-8px] left-0 text-error ">
          {errors.name?.message}
        </p>
      )}
    </div>
  );
};
