import express from "express";
import { Login } from "../controllers/auth.js";
import { Register } from "../controllers/auth.js";
const router = express.Router();
router.post("/register", Register);
router.post("/login", Login);
export default router;
