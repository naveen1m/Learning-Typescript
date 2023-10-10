import express from "express";
import { getUsers } from "../controller/userController.js";
const router = express.Router();
router.get("/all", getUsers);
export default router;
