import policies from "./policies.js";

export default {
  adjust(action, police) {
    return policies.update(action, police);
  }
};
