export const tag_model = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(100),
      },
      metaTitle: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },
      slug: {
        type: DataTypes.STRING(100),
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
  return tag
};
