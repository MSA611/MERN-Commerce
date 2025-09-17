import express from "express";
import {
  CreateProduct,
  DelProduct,
  getAllProduct,
  getSpecificProduct,
  UpdateProduct,
} from "./controller.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", CreateProduct);
router.get("/:id", getSpecificProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DelProduct);

export default router;
