import "../styles/globals.css";
import { useMemo } from "react";

function MyApp({ Component, pageProps }) {
  //si funciona lento sacar el memo
  return useMemo(() => <Component {...pageProps} />, [pageProps]);
  // return <Component {...pageProps} />;
}

export default MyApp;
