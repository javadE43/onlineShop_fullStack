export const userModel = (sequelize, DataTypes) => {
       const user = sequelize.define(
              'user',
              {
                     id: {
                            type: DataTypes.INTEGER,
                            allowNull: false,
                            autoIncrement: true,
                            primaryKey: true,
                     },
                     firstName: {
                            type: DataTypes.STRING(50),
                            defaultValue: null,
                     },
                     userName: {
                            type: DataTypes.STRING(50),
                            defaultValue: null,
                            unique:true
                     },
                     lastName: {
                            type: DataTypes.STRING(50),
                            defaultValue: null,
                     },
                     mobile: {
                            type: DataTypes.STRING(15),
                            drfaultValue: null,
                     },
                     email: {
                            type: DataTypes.STRING(50),
                            defaultValue: null,
                     },
                     passwordHash: {
                            type: DataTypes.STRING(100),
                     },
                     admin: {
                            type: DataTypes.BOOLEAN,
                            defaultValue: false,
                     },
                     vendor: {
                            type: DataTypes.BOOLEAN,
                            defaultValue: false,
                     },
                     registeredAt: {
                            type: DataTypes.DATE,
                            defaultValue: null,
                     },
                     lastLogin: {
                            type: DataTypes.DATE,
                            defaultValue: null,
                     },
                     intro: {
                            type: DataTypes.BOOLEAN,
                            defaultValue: null,
                     },
                     profile: {
                            type: DataTypes.TEXT,
                            defaultValue: null,
                     },
              },
              {
                     freezeTableName: true,
                     timestamps: false 
              }
       );

       return user;
};
