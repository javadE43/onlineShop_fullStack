import express from "express";

import upload from "../../middelwer/uplode.js"

import { verifyTokenAndAdmin } from "../../utils/jwt.js";
import { ProductConteoller } from "../../controllers/productController.js";

const productRouter = express.Router();

const productConteoller = new ProductConteoller();

productRouter.get("/", productConteoller.getAllProduct);

productRouter.get("/:id", productConteoller.getSingleProduct);

productRouter.get("/category/:category", productConteoller.getProductCategory);

productRouter.get("/category/:category/:id", productConteoller.getsingleProductCategoryById);

productRouter.post("/", verifyTokenAndAdmin,upload, productConteoller.createProduct);

productRouter.put("/:id", verifyTokenAndAdmin, productConteoller.updateProduct);

productRouter.delete("/:id", verifyTokenAndAdmin, productConteoller.deleteProduct);

export default productRouter;
