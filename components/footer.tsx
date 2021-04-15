import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(50),
    padding: `${theme.spacing(6)}px 0`,
  },
}));

// Use useStyles hooks
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">Created by Fuzzy Cloud</Typography>
        <Typography component="p">
          © {new Date().getFullYear()} All right reserved
        </Typography>
      </Paper>
    </footer>
  );
};

export default Footer;
