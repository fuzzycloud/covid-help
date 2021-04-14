import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react';
import Head from '../components/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (<div>
        <Head title={'Covid Help'} />
        <p>Menu will come here</p>
        <Component {...pageProps} />
    </div>)
}


export default MyApp;
