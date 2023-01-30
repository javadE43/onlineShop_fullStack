import express from "express";
import db from "../model/index.js";

export class CategoryController {
  async getCategory(req, res) {
    const cat = await db.category.findAll();
    res.json({
      data: cat,
      message: "success",
      status: 200,
    });
  }
}
