import { TRACKER_LOCALSTORAGE } from "components/cookies/helpers";
import { useMixpanel } from "./context/mixpanel";

// properties and extraproperties should be optionals
export const useTracker = (event, properties) => {
  const mixpanel = useMixpanel();
  const handlePreClickAction = (extraProperties) => {
    if (
      mixpanel !== null &&
      Object.prototype.hasOwnProperty.call(mixpanel, "config") &&
      (localStorage.getItem(TRACKER_LOCALSTORAGE) === null ||
        localStorage.getItem(TRACKER_LOCALSTORAGE) === "true")
    ) {
      // Check that a token was provided (useful if you have environments without Mixpanel)
      mixpanel?.track(event, { ...properties, ...extraProperties });
    }
  };

  const disableMixpanel = () => {
    localStorage.setItem(TRACKER_LOCALSTORAGE, "false");
  };

  const enableMixpanel = () => {
    localStorage.setItem(TRACKER_LOCALSTORAGE, "true");
  };

  return {
    handlePreClickAction,
    disableMixpanel,
    enableMixpanel,
  };
};
