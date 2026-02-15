import { createUser, verifyLogin } from "./auth.service.js";

export const register = async (req, res) => {
  const user = await createUser(req.body);
  res.json(user);
};

export const login = async (req, res) => {
  const result = await verifyLogin(req.body);
  res.json(result);
};
