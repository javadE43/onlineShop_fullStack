import express from "express";

import {OrderController} from "../../controllers/orderController";

import {} from "../../utils/jwt.js";

const orderController=new OrderController()
const orderRoute=express.Router();



orderRoute.get("/",orderController.getAllOrder)







export default orderRoute;
