export default {
  check(action, mood) {
    if (action.type === "exploit") return { status: "block", reason: "exploit_detected" };
    if (mood.mood === "alert") return { status: "watch", reason: "city_alert" };
    if (action.type === "spam") return { status: "warn", reason: "spamming" };
    return { status: "clear" };
  }
};
