// const {Model,DataTypes} = require('sequelize');
// const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

// class User extends Model {
//     checkPassword(loginPw){
//         return bcrypt.compareSync(loginPw,this.password)
//     }
// }

// User.init(
//     {
//         id:{
//             type:DataTypes.INTEGER,
//             allowNull:false,
//             primaryKey:true,
//             autoIncrement:true
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true,
//             },
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len:[10],
//             },
//         },
//     },
//     {
//         hooks: {
//             beforeCreate: async (newUserData) => {
//                 newUserData.password = await bcrypt.hash(newUserData.password, 10);
//                 return newUserData;
//             },
//             beforeUpdate: async (updatedUserData) => {
//                 updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//                 return updatedUserData;
//             },
//         },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'user',
//     },
// );

const Sequelize = require('sequelize');
const db = require('../config/connection');

module.exports = db.sequelize.define(
    'User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
    },
);

module.exports = User;
