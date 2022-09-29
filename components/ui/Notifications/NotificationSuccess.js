import { NOTIFICATIONS } from "components/utils/constants";
import { useCallback, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function NotificationSucess() {
  const [display, setDisplay] = useState("");

  const handleOnClick = useCallback(() => {
    setDisplay("hidden");
  }, []);

  return (
    <div
      className={`notification-success  gradient-bg ${display}`}
      onClick={handleOnClick}
    >
      <div className="flex items-center space-x-3">
        <BsCheckCircleFill />
        <p>{NOTIFICATIONS.success}</p>
      </div>
    </div>
  );
}
