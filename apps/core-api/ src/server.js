import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./auth/auth.routes.js";
import walletRoutes from "./wallet/wallet.routes.js";
import qrRoutes from "./qr-access/qr.routes.js";
import cityRoutes from "./city-ai-bridge/city.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/qr", qrRoutes);
app.use("/api/city-ai", cityRoutes);

app.get("/", (_, res) => {
  res.json({ status: "GSF CORE API ONLINE" });
});

export default app;
