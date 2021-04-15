import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

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

const AddOrUpdate = () => {
  const classes = useStyles();
  return (
    <form
      name="add_service"
      action={'/'}
      className={classes.root}
      method="POST"
      autoComplete={'off'}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="add_service" />
      <TextField
        id="name"
        name="name"
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
        id="details"
        name="details"
        label="Details"
        style={{ margin: 8 }}
        placeholder="Details"
        helperText="Please provide your details"
        fullWidth
        multiline
        rows={4}
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="contacts"
        name="contacts"
        label="Contacts"
        style={{ margin: 8 }}
        placeholder="Contacts"
        helperText="Please provide all contact nos"
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

export default AddOrUpdate;
