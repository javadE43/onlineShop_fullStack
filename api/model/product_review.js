export const product_review = (sequelize, DataTypes) => {
  const product_review = sequelize.define(
    "product_review",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
      },

      rating: {
        type: DataTypes.INTEGER,
        drfaultValue: null,
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
  return product_review;
};
