import Whatsapp from "components/ui/Links/Whatsapp";
import NotificationFail from "components/ui/Notifications/NotificationFail";
import NotificationLoading from "components/ui/Notifications/NotificationLoading";
import NotificationSucess from "components/ui/Notifications/NotificationSuccess";
import Footer from "./Footer";
import Header from "./Header";
import NotificationContext from "context/NotificationContext";
import { useContext } from "react";
import { FAIL, LOADING, SUCCESS } from "components/utils/constants";
export default function MainContent({ content }) {
  const { notification } = useContext(NotificationContext);

  return (
    <div className="page-container">
      {notification === LOADING ? <NotificationLoading /> : ""}
      {notification === SUCCESS ? <NotificationSucess /> : ""}
      {notification === FAIL ? <NotificationFail /> : ""}
      <main className="content-wrap ">
        <Header />

        {content}
      </main>
      <Footer />
      <Whatsapp />
    </div>
  );
}
