const QR_DB = {};

export const createQR = (userId) => {
  const code = "EXCL-" + Date.now();
  QR_DB[code] = { userId, status: "active", createdAt: new Date() };
  return code;
};

export const checkQR = (code) => {
  const record = QR_DB[code];
  if (!record) return false;
  if (record.status !== "active") return false;
  record.status = "used";
  record.usedAt = new Date();
  return true;
};
