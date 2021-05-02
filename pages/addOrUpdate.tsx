import React from 'react';
import { BulmaField } from '../components/bulma/form/input';
import { useForm } from 'react-hook-form';
import { BulmaSubmit } from '../components/bulma/form/submit';
import { BulmaAreaField } from '../components/bulma/form/area';
import { ServiceFilter } from '../components/temp/serviceFilter';
import { BulmaDanger } from '../components/bulma/bulmaDanger';
import { FormAddress } from '../components/temp/add_or_update/address';
import { FormInput } from '../components/temp/add_or_update/types';
import { FormContacts } from '../components/temp/add_or_update/contacts';

const AddOrUpdate = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<FormInput>();

  const onSubmit = (data) => console.log(data);
  const selectedState = watch('address.state');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BulmaField
        name={'name'}
        required
        label={'Name'}
        placeholder={'Enter Name'}
        type={'text'}
        register={register('name', { required: 'Name is required' })}
      />
      {errors.name && <BulmaDanger msg={errors.name.message} />}
      <BulmaAreaField
        name={'details'}
        label={'Detail'}
        placeholder={'Please Enter Details'}
        register={register('details')}
      />
      <ServiceFilter
        register={register('service', { required: 'Service is required' })}
      />
      {errors.service && <BulmaDanger msg={errors.service.message} />}
      <FormAddress
        register={register}
        selectedState={selectedState}
        setValue={setValue}
      />
      <FormContacts control={control} register={register} />
      <BulmaSubmit disabled={!isDirty || !isValid} />
    </form>
  );
};

export default AddOrUpdate;
