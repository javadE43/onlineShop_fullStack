export const category_product = (sequelize, DataTypes) => {
  const category_product = sequelize.define(
    "product_category",
    {},
    {
      freezeTableName: true,
    }
  );
  return  category_product
};
