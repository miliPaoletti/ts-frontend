import { TIME_QUERY_SERVER } from "pages/api/helpers";

const VERSION = "VERSION";
// update each time we deploy
const VERSION_NUMBER = "1.0.0";

export const setVersionLocalStorage = () => {
  const versionLocalStorage = localStorage.getItem(VERSION);
  if (versionLocalStorage) {
    // If the versions are different, query the information from the server
    if (versionLocalStorage !== VERSION_NUMBER) {
      clearLocalStorage();
      // set local storage VERSION to the last value that we want
      localStorage.setItem(VERSION, VERSION_NUMBER);
    }
  } else {
    //  first time that we use it
    localStorage.setItem(VERSION, VERSION_NUMBER);
    clearLocalStorage();
  }
};

const clearLocalStorage = () => {
  // remove the time query server and update
  // the destinations with the server data instead
  // of using the one stored in localstorage
  localStorage.removeItem(TIME_QUERY_SERVER);
};
