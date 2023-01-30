import db from "../model/index.js";


export class Product_reviewController{



    async updateProduct_review(req,res){
        const id=req.params.productId;
        
       try {
        const review=await db.product_review.update(req.body,{
            where:{
              productId:id
            }
        })
        res.json({
            data:review,
            message:"success",
            status:201
        })
       } catch (error) {
        res.json({
            data:error,
            message:"field",
            status:500
        })
       }
    }
}