import React from 'react';
import { BulmaField } from '../components/bulma/form/input';
import { BulmaAreaField } from '../components/bulma/form/area';
import { BulmaSubmit } from '../components/bulma/form/submit';
const Contact = () => {
  return (
    <form
      name="contact"
      action={'/'}
      method="POST"
      autoComplete={'off'}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <BulmaField name={'name'} label={'Name'} placeholder={'Please provide your Name'} type={'text'}/>
      <BulmaField name={'email'} label={'Email'} placeholder={'Please provide your Email'} type={'email'} />
      <BulmaAreaField name={'message'} label={'Message'} placeholder={'Please provide details message'} />
      <BulmaSubmit/>
    </form>
  );
};

export default Contact;
