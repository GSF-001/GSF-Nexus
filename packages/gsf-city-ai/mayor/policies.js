export default {
  update(action, police) {
    if (police.status === "block") return { globalMood: "strict", note: "security_lock" };
    if (action.type === "help") return { globalMood: "open", note: "citizen_support" };
    return { globalMood: "stable" };
  }
};
