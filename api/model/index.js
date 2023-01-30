import { dbConfig } from "../config/db.config.js";
import { Sequelize, DataTypes } from "sequelize";

import { productModel } from "./productModel.js";
import { categoryModel } from "./categoryModel.js";
import { userModel } from "./userModel.js";
import { category_product } from "./category_product.js";
import { product_meta } from "./product_mete.js";
import { product_review } from "./product_review.js";
import { product_tag } from "./product_tag.js";
import { tag_model } from "./tag.js";
import { cart_model } from "./cart_model.js";
import { cart_item } from "./cart_item.js";
import { order_model } from "./order_model.js";
import { order_item } from "./order_item.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  operatorsAliases: false,
  pool: {
    max: dbConfig.POOL.max,
    min: dbConfig.POOL.min,
    acquire: dbConfig.POOL.acquire,
    idle: dbConfig.POOL.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...!");
  })
  .catch((err) => {
    console.log("ERR" + err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// model
db.product = productModel(sequelize, DataTypes);
db.category = categoryModel(sequelize, DataTypes);
db.user = userModel(sequelize, DataTypes);
db.category_product = category_product(sequelize, DataTypes);
db.product_meta = product_meta(sequelize, DataTypes);
db.product_review = product_review(sequelize, DataTypes);
db.product_tag = product_tag(sequelize, DataTypes);
db.tag_model = tag_model(sequelize, DataTypes);
db.cart_model = cart_model(sequelize, DataTypes);
db.cart_item = cart_item(sequelize, DataTypes);
db.order_model = order_model(sequelize, DataTypes);
db.order_item = order_item(sequelize, DataTypes);

// relationships
db.user.hasMany(db.product, { foreignKey: "userId" });
db.product.belongsTo(db.user, { foreignKey: "userId" });

db.product.belongsToMany(db.category, {
  through: db.category_product,
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});
db.category.belongsToMany(db.product, {
  through: db.category_product,
  foreignKey: { name: "categoryId", type: DataTypes.INTEGER },
});

db.product.hasMany(db.product_review, {
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});
db.product.hasMany(db.product_meta, {
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});

db.tag_model.belongsToMany(db.product, {
  through: db.product_tag,
  foreignKey: { name: "tagId", type: DataTypes.INTEGER },
});
db.product.belongsToMany(db.tag_model, {
  through: db.product_tag,
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});

db.product.belongsToMany(db.order_model, {
  through: db.order_item,
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});
db.order_model.belongsToMany(db.product, {
  through: db.order_item,
  foreignKey: { name: "orderId", type: DataTypes.INTEGER },
});

db.product.belongsToMany(db.cart_model, {
  through: db.cart_item,
  foreignKey: { name: "productId", type: DataTypes.INTEGER },
});
db.cart_model.belongsToMany(db.product, {
  through: db.cart_item,
  foreignKey: { name: "cartId", type: DataTypes.INTEGER },
});

db.user.hasMany(db.cart_model, {
  foreignKey: { name: "userId", type: DataTypes.INTEGER },
});
db.user.hasMany(db.order_model, {
  foreignKey: { name: "userId", type: DataTypes.INTEGER },
});

// sync
db.sequelize.sync({ force: false, alter: false }).then(() => {
  console.log("yes re-sync done!");
});

export default db;
