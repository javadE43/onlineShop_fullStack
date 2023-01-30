export const cart_item = (sequelize, DataTypes) => {
  const cart_item = sequelize.define(
    "cart_item",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sku: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: 0,
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
  return cart_item;
};
