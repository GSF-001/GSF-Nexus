import fs from "fs/promises";

export default async function () {
  const report = { ts: new Date().toISOString(), distributed: 0 };
  await fs.appendFile("./logs/reward_distribute.log", JSON.stringify(report) + "\n");
}
