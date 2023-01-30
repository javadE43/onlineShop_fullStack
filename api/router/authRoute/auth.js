import express from "express";

import { AuthController } from "../../controllers/auth.js";
const authRouter = express.Router();
const authController = new AuthController();

// REGISTER
authRouter.post(
  "/regeister",

  authController.register
);

// LOGIN
authRouter.post("/login", authController.login);

// refreshToken
authRouter.post("/refreshtoken", authController.refreshToken());

export default authRouter;
