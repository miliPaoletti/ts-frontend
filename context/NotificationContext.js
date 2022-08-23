import { createContext, useState } from "react";

export const Context = createContext({});

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");

  return (
    <Context.Provider value={{ notification, setNotification }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
