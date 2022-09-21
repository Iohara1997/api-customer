import express from "express";

const router = express.Router();

router.get("/costumer", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

export { router as default };
