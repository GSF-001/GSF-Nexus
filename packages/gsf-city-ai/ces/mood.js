export default {
  evaluate(action) {
    if (action.type === "help") return { mood: "positive" };
    if (action.type === "spam") return { mood: "alert" };
    if (action.type === "report") return { mood: "investigate" };
    return { mood: "neutral" };
  }
};
