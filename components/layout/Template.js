import Head from "next/head";
import React from "react";
import Footer from "components/layout/Footer";
import Header from "./Header";

const Template = ({ content }) => {
  return (
    <div>
      <Head>
        <title>Turismo Serrano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <main className="content-wrap ">
          <Header />
          {content}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Template;
