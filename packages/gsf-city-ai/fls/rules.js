export default {
  check(action) {
    if (action.amount < 0) return { allowed: false, reason: "negative_amount" };
    if (action.type === "reward" && action.amount > 5000) return { allowed: false, reason: "reward_limit" };
    if (action.risk && action.risk > 80) return { allowed: false, reason: "high_risk" };
    return { allowed: true };
  }
};
