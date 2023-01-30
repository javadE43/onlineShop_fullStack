import express from "express";

import {Product_reviewController} from "../../controllers/product_reviewController.js"


const product_reviewRouter =express.Router()
const  product_reviewController =new Product_reviewController()


product_reviewRouter.post("/:productId",product_reviewController.updateProduct_review)



export default product_reviewRouter