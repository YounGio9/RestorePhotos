import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import React from "react";
import "../styles/globals.css";
import ThemeContextProvider from "../components/ThemeContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
