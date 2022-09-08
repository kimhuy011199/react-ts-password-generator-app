import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { generatePassword } from '../core/helper';
import Checkbox from './Checkbox';
import PasswordResult from './PasswordResult';
import PasswordStrength from './PasswordStrength';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';

type FormValues = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

const PasswordForm = () => {
  const [result, setResult] = useState<string>('');
  const [strength, setStrength] = useState<number>(0);
  const [passLength, setPassLength] = useState<number>(12);
  const [validForm, setValidForm] = useState<boolean>(false);
  const { handleSubmit, control, watch } = useForm<FormValues>();

  const passLengthHandle = (e: any) => {
    const { min, max, value } = e.target;
    e.target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + '% 100%';
    setPassLength(+value);
  };

  const checkboxList = [
    { name: 'uppercase', label: 'Include uppercase letters' },
    { name: 'lowercase', label: 'Include lowercase letters' },
    { name: 'numbers', label: 'Include numbers' },
    { name: 'symbols', label: 'Include symbols' },
  ];

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    const { uppercase, lowercase, symbols, numbers } = formData;
    const { result, strength } = generatePassword(
      passLength,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
    setResult(result);
    setStrength(strength);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setValidForm(Object.values(value).includes(true));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <PasswordResult result={result} />
      <div className="flex flex-col gap-4 bg-gray3 p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="">Character length</span>
          <span className="text-3xl font-semibold text-green">
            {passLength}
          </span>
        </div>
        <input
          type="range"
          min={8}
          max={16}
          value={passLength}
          onChange={passLengthHandle}
          className="inputRange"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <ul>
            {checkboxList.map((item: any, index: number) => (
              <li key={item.name} className="mt-4">
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field: props }) => (
                    <Checkbox
                      name={item.name}
                      label={item.label}
                      onChange={(e: any) => props.onChange(e.target.checked)}
                    />
                  )}
                />
              </li>
            ))}
          </ul>
          <PasswordStrength strength={+strength} />
          <button
            disabled={!validForm}
            type="submit"
            className="flex items-center justify-center gap-3 border-2 border-green bg-green p-3 text-lg font-semibold uppercase text-black1 hover:border-green hover:bg-black2 hover:text-green disabled:border-black2 disabled:bg-black2 disabled:text-gray2"
          >
            <span>Generate</span>
            <ArrowIcon className="w-3" />
          </button>
        </form>
      </div>
    </>
  );
};

export default PasswordForm;
