import crypto from "crypto";
import jwt from "jsonwebtoken";

const USERS = [];

export const createUser = ({ email, password }) => {
  const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = { id: USERS.length + 1, email, hash, role: "USER" };
  USERS.push(user);
  return user;
};

export const verifyLogin = ({ email, password }) => {
  const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = USERS.find(u => u.email === email && u.hash === hash);

  if (!user) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );

  return { token };
};
