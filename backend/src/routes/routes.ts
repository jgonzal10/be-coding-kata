import { Router } from "express";
import { getTotal } from "../controllers/total.controller";

const router = Router();
router.post("/getTotal", getTotal);

export default router;
