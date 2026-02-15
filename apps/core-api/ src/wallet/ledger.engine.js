export const createTransaction = (userId, type, amount) => {
  return {
    id: Date.now(),
    userId,
    type,
    amount,
    ts: new Date().toISOString()
  };
};
