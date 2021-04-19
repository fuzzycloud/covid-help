import NextDocument from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import React from 'react';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheet.getStyleElement(),
      ],
    };
  }
}

export default MyDocument;
