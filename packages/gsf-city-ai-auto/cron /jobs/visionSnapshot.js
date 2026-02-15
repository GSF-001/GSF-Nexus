import fs from "fs/promises";

export default async function () {
  const snapshot = { ts: new Date().toISOString(), status: "ok" };
  await fs.appendFile("./logs/vision_snapshots.log", JSON.stringify(snapshot) + "\n");
}
