import express from "express";
import { generateQR, validateQR } from "./qr.controller.js";

const router = express.Router();

router.post("/generate", generateQR);
router.post("/validate", validateQR);

export default router;
