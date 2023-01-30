import express from "express";
import {UplodeController} from "../../controllers/uplodeController.js"
import uploade from "../../middelwer/uplode.js";

const uploadRouter=express.Router();

const uplodeController=new UplodeController()



uploadRouter.post("/",uploade,uplodeController.addFile)











export default uploadRouter;