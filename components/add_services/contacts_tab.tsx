import { FormTabs } from './form_tabs';
import { UseBulmaFormReturn } from '../useBulmaForm';
import { FormInput } from './types';
import { useFieldArray } from 'react-hook-form';
import { Button, Form, Notification } from 'react-bulma-components';
import React from 'react';

type ContactsTabProps = {
  selectedTab: FormTabs;
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
};
export const ContactsTab: React.FC<ContactsTabProps> = (props) => {
  const {
    selectedTab,
    bulmaForm: {
      control,
      register,
      setError,
      watch,
      formState: { errors },
    },
  } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'contacts',
    }
  );
  const { Input, Field, Label } = Form;
  return (
    <div className={selectedTab !== 'Contacts' ? 'is-hidden' : ''}>
      <Button type={'button'} onClick={() => append({})}>
        Add Contact
      </Button>
      {fields.map((field, index) => (
        <div key={index}>
          <Field>
            <Label>Name</Label>
            <Input
              {...register(`contacts.${index}.name` as any, {
                required: 'Name is required',
              })}
            />
            {errors.contacts && errors.contacts[index]?.name && (
              <Notification color={'danger'}>
                {errors.contacts[index].name.message}
              </Notification>
            )}
          </Field>
          <Field>
            <Label>Mobile No</Label>
            <Input
              {...register(`contacts.${index}.mobileNo` as any, {
                required: 'Mobile No is required',
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: 'Valid mobile or phone no required',
                },
              })}
            />
            {errors.contacts && errors.contacts[index]?.mobileNo && (
              <Notification color={'danger'}>
                {errors.contacts[index].mobileNo.message}
              </Notification>
            )}
          </Field>
          <Button color={'warning'} onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};
