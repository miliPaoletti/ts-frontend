import { createContext, useState } from "react";

export const Context = createContext({
  notification: "",
  // set ntification will receive a string as a parameter
  setNotification: (notification: string) => {},
});

import { ReactNode } from "react";

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState("");

  return (
    <Context.Provider value={{ notification, setNotification }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
