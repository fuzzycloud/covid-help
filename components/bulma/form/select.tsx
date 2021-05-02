import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { SelectOption } from './selectOption';

type BulmaSelectProps = {
  defaultValueMsg: string;
  options: SelectOption[];
  register?: UseFormRegisterReturn;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
export const BulmaSelect: React.FC<BulmaSelectProps> = (props) => {
  const { defaultValueMsg, options, register, ...rest } = props;
  const selectProps: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > = register ? { ...register, ...rest } : { ...rest };
  return (
    <div className="select is-rounded">
      <select {...selectProps}>
        <option value=""> {defaultValueMsg} </option>
        {options.map((x, i) => (
          <option value={x.value} key={`${x.value}_${i}`}>
            {x.label}
          </option>
        ))}
      </select>
    </div>
  );
};
