const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model {}

User.init({
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8,20],
            notContains: "password",
            isLowercase: true,
            isUppercase: true,
        }
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
})

(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

module.exports = User;