import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type BulmaAreaFieldProps = {
  label: string;
  register?: UseFormRegisterReturn;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const BulmaAreaField: React.FC<BulmaAreaFieldProps> = (props) => {
  const { label, register, ...rest } = props;
  const areaProps: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > = register ? { ...register, ...rest } : { ...rest };
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea className="textarea" {...areaProps} />
      </div>
    </div>
  );
};
