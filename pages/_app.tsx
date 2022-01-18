import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
};

export default MyApp;
