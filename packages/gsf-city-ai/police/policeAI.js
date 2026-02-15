import detectors from "./detectors.js";

export default {
  scan(action, mood) {
    return detectors.check(action, mood);
  }
};
