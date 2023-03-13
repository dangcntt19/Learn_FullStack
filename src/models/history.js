"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  history.init(
    {
      // id: DataTypes.STRING,
      studentId: DataTypes.INTEGER,
      teacherId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      file: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "history",
    }
  );
  return history;
};
