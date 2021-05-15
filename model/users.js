const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize =require('../config/connection.js')

class User extends Model {}

User.init({
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type:DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false,
  
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
},
    {
    sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user',
  })

  module.exports = User



  