import express from "express";

import { verifyTokenAndAuthorization,verifyTokenAndAdmin } from "../../utils/jwt.js";
import { updateUser,deleteuser,getUser,getAllUser } from "../../controllers/user.js";

const userRouter = express.Router();

//UPDATE
userRouter.put("/:id", verifyTokenAndAuthorization, updateUser);

// //DELETE
userRouter.delete("/:id",verifyTokenAndAdmin,deleteuser);

// //GET USER
userRouter.get("/find/:id", verifyTokenAndAdmin,getUser);

// //GET ALL USER
userRouter.get("/", verifyTokenAndAdmin,getAllUser);

// //GET USER STATS

// userRouter.get("/stats",verifyTokenAndAdmin, getUserStats);

export default userRouter;
