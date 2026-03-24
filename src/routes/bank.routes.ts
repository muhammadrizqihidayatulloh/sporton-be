import { Router } from "express";
import { createBank, getBank, updateBank, deleteBank} from "../controllers/bank.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, createBank);
router.get("/", getBank);
router.put("/:id", authenticate, updateBank);
router.delete("/:id", authenticate, deleteBank);

export default router;
