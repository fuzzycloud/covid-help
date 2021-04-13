import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {MenuItem,ListItem,List,ListItemText,Divider,Grid,Paper,Typography }from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      
    },
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Select State</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="A">
            {/* <option value={1}>Gujarat</option> */}
            <option value={2}>Asam</option>
          </optgroup>
          <optgroup label="G">
            <option value={1}>Gujarat</option>
            {/* <option value={2}>Asam</option> */}
          </optgroup>
        </Select>
      </FormControl>
      
<Divider/>

      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <a href="/List/list">City One</a>
        
        </ListItem>
        <Divider/>
        <ListItem button>
        <a href="/List/list">City Two</a>
        </ListItem>
        <Divider/>
        <ListItem button>
        <a href="/List/list">City Three</a>
        </ListItem>
        <Divider/>
      </List>
    </div>
  );
  }