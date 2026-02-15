import mood from "./mood.js";

export default {
  process(action) {
    return mood.evaluate(action);
  }
};
