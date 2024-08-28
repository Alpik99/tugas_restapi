import express from "express";
import {
  createObat,
  deleteObat,
  getObat,
  getObatById,
  updateObat,
} from "../Controller/obatController.js";

const router = express.Router();

router.get("/", getObat);
router.get("/find", getObatById);
router.post("/create", createObat);
router.put("/update", updateObat);
router.delete("/delete", deleteObat);

export default router;