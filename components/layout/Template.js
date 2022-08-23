import Head from "next/head";
import React from "react";
import Footer from "components/layout/Footer";
import Header from "./Header";

const Template = ({ content, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
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
