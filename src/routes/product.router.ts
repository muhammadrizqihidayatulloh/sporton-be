import { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct, getProductById} from "../controllers/product.controller"
import { upload } from "../middlewares/upolad.middleware";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticate, upload.single("image"), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
