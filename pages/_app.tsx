import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="overflow-x-hidden">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
