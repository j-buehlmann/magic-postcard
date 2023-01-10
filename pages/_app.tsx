import "../styles/globals.css";
import Footer from '../components/footer.js';

function MyApp({ Component, pageProps }) {
  return <div><Component {...pageProps} /> <Footer />
  </div>;
 
}

export default MyApp;
