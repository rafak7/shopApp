import '@/styles/globals.css'; // Importar o arquivo CSS global
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
