export const SitesInfo=(sequelize,DataTypes)=>{

    return SitesInfo= sequelize.define("SitesInfo",{

       id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        autoIncrement:true,
        primaryKey:true
       },

       logo:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:null
       },
       logo:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:null
       },

    },{




    })


}