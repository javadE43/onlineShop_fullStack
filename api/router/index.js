import express from "express";

import { verifyToken } from "../utils/jwt.js";

import authRouter from "./authRoute/auth.js";
import productRouter from "./productRoute/productRoute.js";
import userRouter from "./userRoute/userRoute.js";
import cartRouter from "./cartRoute/cart.js";
import categoryRouter from "./categoryRoute/categoryRoute.js";
import product_reviewRouter from "./product_review/product_review.js"
import uploadRouter from "./uplodeRoute/uploadRouter.js";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/cart", cartRouter);
router.use("/cart", product_reviewRouter);
router.use("/upload", uploadRouter);

export default router;
