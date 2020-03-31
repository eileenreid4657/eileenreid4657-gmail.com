const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Example model
class User extends Model {}

// create fields/columns for Post model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sex: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize
   
  }
);

module.exports = User;
