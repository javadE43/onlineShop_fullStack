export const productModel = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sku: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      title: {
        type: DataTypes.STRING(75),
      },
      slug: {
        type: DataTypes.STRING(100),
      },
      image:{
        type:DataTypes.STRING(255)
      },
      des:{
          type:DataTypes.STRING(255)
      },
      type: {
        type: DataTypes.INTEGER,
        drfaultValue: 0,
      },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      discount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      shop: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      content: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return product;
};
