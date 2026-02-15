export const pickRarity = () => {
  const r = Math.random() * 100;
  if (r < 70) return "Common";
  if (r < 90) return "Rare";
  if (r < 97) return "Epic";
  return "Legendary";
};
