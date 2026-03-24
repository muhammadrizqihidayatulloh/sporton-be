import { Router } from "express";
import { createTransaction, getTransaction, getTransactionById, updateTransaction } from "../controllers/transaction.controller"
import { upload } from "../middlewares/upolad.middleware";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransaction);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, updateTransaction);

export default router;
