import Head from "next/head";
import React, { useEffect } from "react";
import { NotificationProvider } from "context/NotificationContext";
import MainContent from "./MainContent";
import { setVersionLocalStorage } from "./index/utils";

const Template = ({ content, title }) => {
  useEffect(() => {
    setVersionLocalStorage();
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${
            process.env.NEXT_PUBLIC_BASE_PATH === undefined
              ? "/favicon.ico"
              : `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`
          }`}
        />
      </Head>
      <NotificationProvider>
        <MainContent content={content} />
      </NotificationProvider>
    </div>
  );
};

export default Template;
