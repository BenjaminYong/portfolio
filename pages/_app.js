import React from "react";
import Head from "next/head";
import GlobalStyle from "../components/global-style";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/themes";

const App = ({ Component, pageProps }) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Head>
          <title>Benjamin Yong</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <Component {...pageProps} changeTheme={themeToggler} theme={theme} />
      </>
    </ThemeProvider>
  );
};

export default App;
