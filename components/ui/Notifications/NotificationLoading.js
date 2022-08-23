import { useCallback, useState } from "react";

export default function NotificationLoading() {
  const [display, setDisplay] = useState("");

  const handleOnClick = useCallback(() => {
    setDisplay("hidden");
  }, []);

  return (
    <div
      className={`notification-loading ${display} gradient `}
      onClick={handleOnClick}
    >
      <div className="flex items-center space-x-3">
        <span className="loader"></span>
        <p>Enviando consulta...</p>
      </div>
    </div>
  );
}
