export const TRACKER_LOCALSTORAGE = "tracker";
export const setTrackerLocalStorage = (value) => {
  return localStorage.setItem(TRACKER_LOCALSTORAGE, value);
};

export const getTrackerLocalStorage = () => {
  return localStorage.getItem(TRACKER_LOCALSTORAGE);
};
