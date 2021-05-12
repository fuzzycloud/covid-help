import React from 'react';
import {Button, Form} from 'react-bulma-components';
const Contact = () => {
  const { Field, Input, Label, Textarea } = Form;
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
      <Field>
       <Label>
         Name
       </Label>
       <Input name={'name'} placeholder={'Please provide your Name'} type={'text'} />
      </Field>
      <Field>
        <Label>
          Email
        </Label>
        <Input name={'email'} placeholder={'Please provide your Email'} type={'email'} />
      </Field>
      <Field>
        <Label>
          Message
        </Label>
        <Textarea name={'message'} placeholder={'Please provide detailed message'} />
      </Field>
      <Button type={'submit'} color={'success'} > Submit </Button>
    </form>
  );
};

export default Contact;
