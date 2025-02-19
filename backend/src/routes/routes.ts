import { Router } from "express";
import { getTotal } from "../controllers/total.controller";

const router = Router();
router.get("/getTotal", getTotal);

export default router;