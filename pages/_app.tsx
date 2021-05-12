import Site_head from '../components/site_head';
import '../styles/app.css';
import Menu from '../components/menu';
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Site_head title={'Covid Help'} />
      <Menu />
      <div className="container is-fluid main">

        <div className={'section'}>
          <Component {...pageProps} />
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Maintained by <a href={'https://fuzzycloud.in'}>Fuzzy Cloud.</a>  &copy; {new Date().getFullYear()} All right reserved. Data is aggregated for community service, but not verified. You might find discrepancy in services. Please contact us if there is any need for update.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
