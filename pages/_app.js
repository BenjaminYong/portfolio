import Head from "next/head";
import GlobalStyle from "../components/global-style";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Benjamin Yong</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
