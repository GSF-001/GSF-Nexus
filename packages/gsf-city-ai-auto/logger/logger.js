import pino from "pino";

export default pino({
  level: "info",
  timestamp: pino.stdTimeFunctions.isoTime
});
