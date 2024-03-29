import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Head from '../components/head';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { serviceRoutes } from '../data/routes';
import Footer from '../components/footer';
import { HomeRounded } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
      color: 'white',
    },
  })
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Head title="Covid Help" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography onClick={() => router.push('/')} variant="h6" noWrap>
                <IconButton>
                  <HomeRounded />
                </IconButton>
                Covid Help
              </Typography>

              <IconButton
                href="https://github.com/fuzzycloud/covid-help"
                target="_blank"
                className={classes.rightToolbar}
              >
                <GitHubIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {serviceRoutes.map((item, index) => (
                <ListItem
                  button
                  key={`${item.title}_${index}`}
                  onClick={() => {
                    router.push(item.route);
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem
                button
                key={'add-or-update'}
                onClick={() => {
                  router.push('/addOrUpdate');
                }}
              >
                <ListItemText primary={'Add Or Update'} />
              </ListItem>
              <ListItem
                button
                key={'contact-us'}
                onClick={() => {
                  router.push('/contact');
                }}
              >
                <ListItemText primary={'Contact Us'} />
              </ListItem>
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <div>
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </ThemeProvider>
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
