import express from "express";

import {CartController} from '../../controllers/cartController.js';
import {tokenCartShoping} from "../../utils/jwt.js"

const cartRouter=express.Router();
const cartController=new CartController();

cartRouter.get("/",cartController.getCartItem)

cartRouter.post("/",cartController.createCart)

cartRouter.put("/",cartController.upadateCartItem)

cartRouter.put("/",cartController.deleteItems)




export default cartRouter;