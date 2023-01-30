import db from "../model/index.js";

import jwt from "jsonwebtoken";
import "dotenv/config";

import { tokenCartShoping } from "../utils/jwt.js";
import { Op } from "sequelize";

export class CartController {
  // create cartShoping
  async createCart(req, res) {
    let cart;
    await tokenCartShoping(req, res);
    const user = await db.user.findOne({
      where: { email: req.body.cart.email },
    });
    const info = {
      token: req.tokenCart,
      status: req.body.cart.status,
      firstName: req.body.cart.firstname,
      lastName: req.body.cart.lastname,
      userName: req.body.cart.userName,
      mobile: req.body.cart.mobile,
      email: req.body.cart.email,
      city: req.body.cart.city,
      content: req.body.cart.content,
      firstName: req.body.cart.firstname,
      firstName: req.body.cart.firstname,
      line1: req.body.cart.line1,
      line2: req.body.cart.line2,
      userId: user ? user.id : null,
    };
    cart = await db.cart_model.findOne({
      where: { email: info.email },
    });

    let products = req.body.products;
    products = await products.map((pro) => pro.sku);

    const pro = await db.product.findAll({
      where: {
        sku: [...products],
      },
    });

    if (!cart) {
      await db.cart_model.create(info);
      cart = await db.cart_model.findOne({
        where: { email: info.email },
      });
      products = pro.map(async (pro) => {
        await db.cart_item.create({
          productId: pro.id,
          cartId: cart.id,
          sku: pro.sku,
          price: pro.price,
          discount: pro.discount,
          quantity: pro.quantity,
          active: true,
          content: pro.content,
        });
      });
    } else {
      await db.cart_item.destroy({ where: { cartId: cart.id } });
      products = pro.map(async (pro) => {
        await db.cart_item.create({
          productId: pro.id,
          cartId: cart.id,
          sku: pro.sku,
          price: pro.price,
          discount: pro.discount,
          quantity: pro.quantity,
          active: true,
          content: pro.content,
        });
      });
    }

    res.json({
      data: req.tokenCart,
      success: true,
      status: 200,
    });
  }

  async getCartItem(req, res) {
    const { tokencart } = req.headers;
    if (!tokencart) {
      return res.json({
        data: [],
        success: false,
        message: "There is no shopping cart",
      });
    }
    jwt.verify(tokencart, process.env.JWT, async (err, result) => {
      if (err) {
        return res.json({
          data: [],
          success: false,
          message: "err token cartShoping",
        });
      }

      const cart = await db.cart_model.findOne({
        where: { email: result.email },
      });
      const cartItem = await db.cart_item.findAll({
        where: { cartId: cart.id },
      });
      const productId = await cartItem.map((pro) => pro.productId);
      const product = await db.product.findAll({
        where: {
          id: [...productId],
        },
        attributes: ["title", "price", "slug", "quantity", "discount", "shop",[db.sequelize.fn("SUM",db.sequelize.col("price")),"total"]],

        include: [
          {
            model: db.cart_model,
            attributes: [
              "firstName",
              "lastName",
              "email",
              "mobile",
              "city",
              "status",
            ],
            where: {
              id: cart.id,
            },
            through: { attributes: [] },
          },
        ],
      });
      res.json(product);
    });
  }

  async upadateCartItem(req, res) {
    const { quantity, productId } = req.body.quantity;
    const token = req.headers.tokencart;
    jwt.verify(token, process.env.JWT, async (err, result) => {
      if (err) {
        return res.json({
          error: err,
          message: err.message,
          status: 500,
        });
      }
      const { email } = result;
      const cart = await db.cart_model.findOne({ where: { email: email } });
      const cartItem = await db.cart_item.update({
        quantity: quantity,
        where: {
          [Op.and]: [{ cartId: cart.id }, { productId: productId }],
        },
      });
      res.json({
        data:[],
        success:true,
        message:"update",
        status:200
      })
    });
  }

  async deleteItems(req, res) {
    const {productId} = req.body
    const token = req.headers.tokencart;
    jwt.verify(token, process.env.JWT, async (err, result) => {
      if (err) {
        return res.json({
          error: err,
          message: err.message,
          status: 500,
        });
      }
      const { email } = result;
      const cart = await db.cart_model.findOne({ where: { email: email } });
      const cartItem = await db.cart_item.destroy({
        quantity: quantity,
        where: {
          [Op.and]: [{ cartId: cart.id }, { productId: productId }],
        },
      });
      res.json({
        data:[],
        success:true,
        message:"delete",
        status:200
      })
    });
  }


}
