const WALLETS = {};

export const topUpWallet = async (userId, amount) => {
  if (!WALLETS[userId]) WALLETS[userId] = 0;
  WALLETS[userId] += amount;
  return { userId, balance: WALLETS[userId] };
};

export const getWallet = async (userId) => WALLETS[userId] || 0;
