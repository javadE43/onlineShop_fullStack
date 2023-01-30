export const product_tag = (sequelize, DataTypes) => {
    const product_tag = sequelize.define(
      "product_tag",
      {

      },
      {
        freezeTableName: true,
      }
    );
    return product_tag;
  };
  