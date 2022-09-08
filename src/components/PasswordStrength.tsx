import React from 'react';
import { PASSWORD_STRENGTH } from '../core/constants';

interface PasswordStrengthProps {
  strength: number;
}

const PasswordStrength = (props: PasswordStrengthProps) => {
  const { strength } = props;

  const style = {
    backgroundColor: PASSWORD_STRENGTH[strength].color,
    border: '0',
  };

  const strengthRate = [1, 2, 3, 4].map((item) => (
    <div
      key={item}
      className="h-6 w-2.5 border-2 border-white"
      style={item <= strength ? style : {}}
    />
  ));

  return (
    <div className="flex items-center justify-between bg-black2 px-5 py-4">
      <span className="font-semibold uppercase text-gray2">Strength</span>
      <div className="flex items-center">
        <span className="font-semibold">
          {PASSWORD_STRENGTH[strength].label}
        </span>
        <div className="ml-3 flex gap-1.5">{strengthRate}</div>
      </div>
    </div>
  );
};

export default PasswordStrength;
