import React, { Component, useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <form
      name="contact"
      className={classes.root}
      method="POST"
      autoComplete={'off'}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <TextField
        id="name"
        label="Name"
        style={{ margin: 8 }}
        placeholder="Name"
        helperText="Please provide your name"
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="email"
        label="Email"
        style={{ margin: 8 }}
        placeholder="Email"
        helperText="Please provide your email-id"
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="message"
        label="Message"
        style={{ margin: 8 }}
        placeholder="Message"
        helperText="Please provide detail message"
        fullWidth
        required
        multiline
        rows={4}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button type={'submit'} fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Contact;
