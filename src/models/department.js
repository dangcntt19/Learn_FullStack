"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  department.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "department",
    }
  );
  return department;
};
