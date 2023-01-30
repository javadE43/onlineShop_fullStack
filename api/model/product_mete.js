export const product_meta = (sequelize, DataTypes) => {
    const product_meta = sequelize.define(
      "product_meta",
      {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
       
        key:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        content:{
            type:DataTypes.TEXT,
            defaultValue:null
        }
      },
      {
        freezeTableName: true,
      }
    );
    return  product_meta
  };
  