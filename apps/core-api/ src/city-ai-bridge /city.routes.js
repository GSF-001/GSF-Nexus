import express from "express";
import City from "../../packages/gsf-city-ai/index.js";

const router = express.Router();

router.post("/dispatch", (req, res) => {
  const action = req.body;
  const result = City.council.dispatch(action);
  res.json(result);
});

export default router;
