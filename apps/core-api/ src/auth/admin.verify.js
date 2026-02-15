import crypto from "crypto";

export const verifyAdminIdentity = ({ kycHash, secret }) => {
  const pepper = process.env.ADMIN_PEPPER;

  const computed = crypto
    .createHmac("sha256", pepper)
    .update(secret)
    .digest("hex");

  return computed === kycHash;
};
