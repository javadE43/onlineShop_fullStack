export const order_item = (sequelize, DataTypes) => {
    const order_item = sequelize.define(
      "order_item",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        sku: {
          type: DataTypes.STRING(100),
          allowNull:false
        },
  
        price: {
          type: DataTypes.FLOAT,
          allowNull:false,
          drfaultValue: 0,
        },
        discount: {
          type: DataTypes.FLOAT,
          allowNull:false,
          drfaultValue: 0,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull:false,
          drfaultValue: 0,
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
    return order_item;
  };
  