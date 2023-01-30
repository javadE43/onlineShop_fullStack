export const categoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      parentId: {
        type: DataTypes.BIGINT,
        defaultValue: null,
      },
      title: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique:true
      },
      metaTitle: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },
      slug: {
        type: DataTypes.STRING(100),
        // allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return category;
};
