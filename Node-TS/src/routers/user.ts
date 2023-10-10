import express, { Router } from "express";
import { getUsers } from "../controller/userController.js";


const router: Router = express.Router();

router.get("/all", getUsers);

export default router;