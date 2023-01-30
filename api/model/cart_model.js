export const cart_model = (sequelize, DataTypes) => {
    const cart_model = sequelize.define(
      "cart",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        // sessionId:{
        //     type:DataTypes.STRING(100),
        //     allowNull:false,
        //     defaultValue:null
        // },
        token: {
          type: DataTypes.STRING(255),
          allowNull:false
        },
  
        status: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull:false
        },
        firstName:{
            type:DataTypes.STRING(50),
            defaultValue:null
        },
        lastName:{
            type:DataTypes.STRING(50),
            defaultValue:null
        },
        userName:{
            type:DataTypes.STRING(50),
            defaultValue:null
        },
        mobile:{
            type:DataTypes.STRING(15),
            defaultValue:null
        },
        email:{
            type:DataTypes.STRING(255),
            defaultValue:null
        },
        line1:{
            type:DataTypes.STRING(50),
            defaultValue:null
        },
        line2:{
            type:DataTypes.STRING(50),
            defaultValue:null
        },
        city:{
            type:DataTypes.STRING(50),
            defaultValue:null
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
    return cart_model;
  };
  