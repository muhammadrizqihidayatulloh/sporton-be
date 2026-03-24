import { Router } from "express";
import { createCategory, getCategories, updateCategory, deleteCategory, getCategoryById} from "../controllers/category.controller"
import { upload } from "../middlewares/upolad.middleware";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, upload.single("image"), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticate, upload.single("image"), updateCategory);
router.delete("/:id", authenticate, deleteCategory);

export default router;
