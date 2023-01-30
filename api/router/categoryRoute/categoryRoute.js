import express from "express";

import { CategoryController } from "../../controllers/categoryControllers.js";

const categoryRouter = express.Router();
const categoryController = new CategoryController();

categoryRouter.get("/", categoryController.getCategory);

export default categoryRouter;
