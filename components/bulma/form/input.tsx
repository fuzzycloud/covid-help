import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type BulmaFieldProps = {
  label: string;
  register?: UseFormRegisterReturn;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const BulmaField: React.FC<BulmaFieldProps> = (props) => {
  const { label, register, ...rest } = props;
  const inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > = register ? { ...register, ...rest } : { ...rest };
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className={'input'} {...inputProps} />
      </div>
    </div>
  );
};
