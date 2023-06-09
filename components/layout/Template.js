import Head from "next/head";
import React from "react";
import { NotificationProvider } from "context/NotificationContext";
import MainContent from "./MainContent";
import { MixpanelProvider } from "components/tracker/MixPanelProvider";

const Template = ({ content, title }) => {
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
        <MixpanelProvider
          token={process.env.NEXT_PUBLIC_TRACKER_TOKEN}
          config={{}}
        >
          <MainContent content={content} />
        </MixpanelProvider>
      </NotificationProvider>
    </div>
  );
};

export default Template;
