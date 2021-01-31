import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { AuthProvider } from "../src/context/auth";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
