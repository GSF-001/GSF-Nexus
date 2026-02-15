import { createQR, checkQR } from "./qr.service.js";

export const generateQR = (req, res) => {
  const code = createQR(req.body.userId);
  res.json({ code });
};

export const validateQR = (req, res) => {
  const { code } = req.body;
  const valid = checkQR(code);
  res.json({ valid });
};
