import { topUpWallet, getWallet } from "./wallet.service.js";

export const topUp = async (req, res) => {
  const { userId, amount } = req.body;
  const result = await topUpWallet(userId, amount);
  res.json(result);
};

export const getBalance = async (req, res) => {
  const { userId } = req.params;
  const balance = await getWallet(userId);
  res.json({ balance });
};
