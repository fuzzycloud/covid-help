// import type { AppProps } from 'next/app';
// import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';
// import {
//   makeStyles,
//   useTheme,
//   Theme,
//   createStyles,
// } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Head from '../components/head';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import {
//   ThemeProvider,
// } from '@material-ui/core';
// import { useRouter } from 'next/router';
// import { serviceRoutes } from '../data/routes';
// import Footer from '../components/footer';
// import { HomeRounded } from '@material-ui/icons';


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     appBar: {
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     appBarShift: {
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     hide: {
//       display: 'none',
//     },
//     drawerHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: theme.spacing(0, 1),
//       // necessary for content to be below app bar
//       ...theme.mixins.toolbar,
//       justifyContent: 'flex-end',
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     contentShift: {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     },
//     rightToolbar: {
//       marginLeft: 'auto',
//       marginRight: -12,
//       color: 'white',
//     },
//   })
// );

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Head title="Covid Help" />
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className={classes.root}>
//           <CssBaseline />
//           <AppBar
//             position="fixed"
//             className={clsx(classes.appBar, {
//               [classes.appBarShift]: open,
//             })}
//           >
//             <Toolbar>
//               <Typography onClick={() => router.push('/')} variant="h6" noWrap>
//                 <IconButton>
//                   <HomeRounded />
//                 </IconButton>
//                 Covid Help
//               </Typography>

//               <IconButton
//                 href="https://github.com/fuzzycloud/covid-help"
//                 target="_blank"
//                 className={classes.rightToolbar}
//               >
//                 <GitHubIcon />
//               </IconButton>
//             </Toolbar>
//           </AppBar>
//           <main
//             className={clsx(classes.content, {
//               [classes.contentShift]: open,
//             })}
//           >
//             <div className={classes.drawerHeader} />
//             <div>
//               <Component {...pageProps} />
//             </div>
//           </main>
//         </div>
//       </ThemeProvider>
//       <Footer />
//     </React.Fragment>
//   );
// };

// export default MyApp;
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import Head from 'next/head';


import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '../styles/globals.css';
import '../styles/variables.css';
import { JSX as LocalJSX} from '@ionic/core'
import {JSX as IoniconsJSX} from 'ionicons'
import { HTMLAttributes, ReactText } from 'react'

import React, { useEffect } from 'react'
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
    key?: ReactText;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements> {}
  }
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;