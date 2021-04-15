import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
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
        <Typography variant="caption" display="block">
          Maintained by <a href={'https://fuzzycloud.in'}>Fuzzy Cloud.</a> ©{' '}
          {new Date().getFullYear()} All right reserved. Data is aggregated for
          community service, but not verified. You might find discrepancy in
          services. Please <Link href={'/contact'}> contact us </Link> if there
          is any need for update.
        </Typography>
      </Paper>
    </footer>
  );
};

export default Footer;
