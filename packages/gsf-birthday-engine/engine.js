import { pickRarity } from "./rarity.js";

export function triggerBirthday(user) {
  const rarity = pickRarity();
  return { userId: user.id, rarity, theme: "gold" };
}
