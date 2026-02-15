import pinoHttp from "pino-http";
import logger from "./logger.js";

export const requestLogger = pinoHttp({ logger });
