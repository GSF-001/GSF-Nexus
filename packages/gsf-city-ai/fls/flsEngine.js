import rules from "./rules.js";

export default {
  evaluate(action) {
    return rules.check(action);
  }
};
