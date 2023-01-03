import HeadComponent from "../src/components/head/head";
import MainLayout from "../src/layouts/main-layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadComponent />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
