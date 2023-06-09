import Whatsapp from "components/ui/Links/Whatsapp";
import NotificationFail from "components/ui/Notifications/NotificationFail";
import NotificationLoading from "components/ui/Notifications/NotificationLoading";
import NotificationSucess from "components/ui/Notifications/NotificationSuccess";
import Footer from "./Footer";
import Header from "./Header";
import NotificationContext from "context/NotificationContext";
import { useContext } from "react";
import { FAIL, LOADING, SUCCESS } from "components/utils/constants";

import { useTracker } from "components/tracker/useTracker";
import { CLICK_WHATSAPP_BUTTON } from "components/tracker/constants";
import { ModalCookies } from "components/cookies/ModalCookies";
export default function MainContent({ content }) {
  const { notification } = useContext(NotificationContext);
  const { handlePreClickAction } = useTracker(CLICK_WHATSAPP_BUTTON);
  return (
    <div className="page-container">
      <ModalCookies />
      {notification === LOADING ? <NotificationLoading /> : ""}
      {notification === SUCCESS ? <NotificationSucess /> : ""}
      {notification === FAIL ? <NotificationFail /> : ""}
      <main className="content-wrap ">
        <Header />

        {content}
      </main>
      <Footer />
      <Whatsapp
        onClick={() => {
          handlePreClickAction();
        }}
      />
    </div>
  );
}
