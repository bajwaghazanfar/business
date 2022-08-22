import { Navbar } from "../styles/components/Navbar/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
