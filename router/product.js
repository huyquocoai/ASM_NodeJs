import express from "express";
import {
  getAllProduct,
  getProductByID,
  addProduct,
  UpdateProduct,
  DeleteProduct,
} from "../controllers/product.js";
const router = express.Router();

router.get("/product", getAllProduct);
router.get("/product/:id", getProductByID);
router.post("/product", addProduct);
router.put("/product", UpdateProduct);
router.delete("/product", DeleteProduct);

export default router;
