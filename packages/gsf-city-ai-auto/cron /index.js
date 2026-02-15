import cron from "node-cron";
import visionSnapshot from "./jobs/visionSnapshot.js";
import rewardDistributor from "./jobs/rewardDistributor.js";

cron.schedule("*/5 * * * *", visionSnapshot);
cron.schedule("0 2 * * *", rewardDistributor);

console.log("GSF City AI Automation Running");
