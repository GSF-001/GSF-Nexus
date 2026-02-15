import express from "express";
import { topUp, getBalance } from "./wallet.controller.js";

const router = express.Router();

router.post("/topup", topUp);
router.get("/balance/:userId", getBalance);

export default router;
