import db from "../model/index.js";

export class ProductConteoller {
  // create product

  async createProduct(req, res) {
    const user = req.user;
    const category = req.body.category;
    const info = {
      title: req.body.title,
      slug: req.body.slug,
      price: req.body.price,
      type: req.body.type,
      image: req.body.image,
      discount: req.body.discount,
      quantity: req.body.quantity,
      shop: req.body.shop,
      createdAt: req.body.createdat,
      updatedAt: req.body.updateat,
      content: req.body.content,
    };

    const pro = await db.product.findOne({ where: { title: info.title } });
    if (pro) {
      return res.send("عنوان از قبل وجود دارد");
    }
    const product = await user.createProduct(info);
    if (!category) {
      const categoryDefault = await db.category.findOne({
        where: { title: "Uncategorized" },
      });
      if (!categoryDefault) {
        await db.category.create({
          title: "Uncategorized",
        });
      }
      const categoryModel = await db.category.findOne({
        where: { title: "Uncategorized" },
      });
      await db.category_product.create({
        categoryId: categoryModel.id,
        productId: product.id,
      });

      await db.product_review.create({
        productId: product.id,
        title: product.title,
      });
    } else {
      const categoryModel = await db.category.findOne({
        where: { title: category },
      });
      if (!categoryModel) {
        await db.category.create({
          title: category,
        });
      }
      const categoryModelNew = await db.category.findOne({
        where: { title: category },
      });
      await db.category_product.create({
        categoryId: categoryModelNew.id,
        productId: product.id,
      });
      await db.product_review.create({
        productId: product.id,
        title: product.title,
        rating: 3,
      });
    }
    res.json(product);
  }

  // get all product
  async getAllProduct(req, res) {
    const products = await db.product.findAll({
      attributes: ["title", "quantity", "image", "price", "createdat", "slug"],
      include: [
        {
          model: db.category,
          attributes: ["id", "title", "metaTitle", "slug"],
          through: { attributes: [] },
        },
        {
          model: db.user,
          attributes: [
            "id",
            "userName",
            "firstName",
            "lastName",
            "mobile",
            "email",
          ],
        },
        {
          model: db.product_review,
          attributes: [
            "id",
            "title",
            "rating",
            "productId"
          ],
        },
      ],
      order: [["price"]],
    });
    res.json({
      data: products,
      message: "ok",
      status: 200,
    });
  }

  // get single product

  async getSingleProduct(req, res) {
    console.log(req.params);
    const products = await db.product.findAll({
      attributes: ["title", "quantity", "price", "image", "createdat", "slug"],
      where: { id: req.params.id },
      include: [
        {
          model: db.category,
          attributes: ["id", "title", "metaTitle", "slug"],
          through: { attributes: [] },
        },
        {
          model: db.user,
          attributes: [
            "id",
            "userName",
            "firstName",
            "lastName",
            "mobile",
            "email",
          ],
        },
        {
          model: db.product_review,
          attributes: [
            "id",
            "title",
            "rating",
            "productId"
          ],
        },
      ],
      order: [["id", "desc"]],
    });
    if (products.length <= 0) {
      return res.send("محصولی پیدا نشد");
    }
    const pro = products[0].products;
    res.json({
      data: products,
      message: "success",
      status: 200,
    });
  }

  // get productByCategory

  async getProductCategory(req, res) {
    const paramsCate = req.params.category;
    const category = await db.category.findOne({
      where: { title: paramsCate },
    });

    if (!category) {
      return res.send("There are no categories");
    }

    const catPro = await db.category.findAll({
      attributes: ["id", "title", "metaTitle", "slug"],
      include: [
        {
          model: db.product,
          attributes: [
            "id",
            "title",
            "quantity",
            "image",
            "price",
            "createdat",
            "slug",
          ],
        },
      ],
      where: { title: paramsCate },
    });
    const pro = catPro[0].products;
    res.json({
      data: pro,
      message: "ok",
      status: 200,
    });
  }
  // get singleProductCategoryById

  async getsingleProductCategoryById(req, res) {
    const paramsCate = req.params;

    const category = await db.category.findOne({
      where: { title: paramsCate.category },
    });

    if (!category) {
      return res.send("There are no categories");
    }

    const product = await db.product.findOne({ where: { id: paramsCate.id } });
    if (!product) {
      return res.send("No product found");
    }

    const catPro = await db.category.findAll({
      attributes: ["id", "title", "metaTitle", "slug"],
      include: [
        {
          model: db.product,
          attributes: [
            "id",
            "title",
            "quantity",
            "image",
            "price",
            "createdat",
            "slug",
          ],
          where: { id: paramsCate.id },
        },
      ],
      where: { title: paramsCate.category },
    });

    res.json(catPro);
  }

  // update product

  async updateProduct(req, res) {
    const product = await db.product.findOne({
      where: { id: req.params.id },
    });

    if (product.title === req.body.title) {
      return res.send("The title cannot be repeated");
    }
    const updateProduct = await db.product.update(req.body, {
      where: { id: req.params.id },
    });
    const category = await db.category.findOne({
      where: { title: req.body.category },
    });

    const upCategoryProduct = await db.category_product.update(
      {
        categoryId: category.id,
      },
      { where: { productId: req.params.id } }
    );

    res.json(updateProduct);
  }

  // delete product

  async deleteProduct(req, res) {
    const id = req.params.id;
    const product = await db.product.destroy({ where: { id: id } });
    res.json(product);
  }
}
