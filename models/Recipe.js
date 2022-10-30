const {Sequelize, Model, DataTypes} = require("sequelize")
//const sequelize = require("../config/connection")
const sequelize = require ("../config/connection")



class Recipes extends Model{}
Recipes.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        ingredients:{
            type:DataTypes.STRING,
            allowNull: false,

        }
    }, {
        sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes',
        
    }
)
module.exports = Recipes