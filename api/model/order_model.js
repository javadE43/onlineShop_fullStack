export const order_model = (sequelize, DataTypes) => {
    const order_model = sequelize.define(
      "order",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        sessionId: {
          type: DataTypes.STRING(100),
          allowNull:false,
          
        },
  
        token: {
            type: DataTypes.STRING(100),
            allowNull:false
        },
        status:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        },
        subTotal:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        itemDiscount:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        tax:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        shipping:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        total:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        discount:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
        },
        grandTotal:{
            type:DataTypes.FLOAT,
            allowNull:false,
            defaultValue:0
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
        email:{
            type:DataTypes.STRING(255),
            defaultValue:null
        },
        mobile:{
            type:DataTypes.STRING(15),
            defaultValue:null
        },
        line1:{
            type:DataTypes.STRING(100),
            defaultValue:null
        },
        line2:{
            type:DataTypes.STRING(100),
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
    return order_model;
  };
  