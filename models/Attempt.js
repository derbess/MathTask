'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attempt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attempt.belongsTo(models.User, {
        foreignKey: "user_id",
      })
    }
  };
  Attempt.init({
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attempt',
  });
  return Attempt;
};