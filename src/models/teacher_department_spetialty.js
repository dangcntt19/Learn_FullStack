"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teacher_department_spetialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teacher_department_spetialty.init(
    {
      // id: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
      pepartmentId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "teacher_department_spetialty",
    }
  );
  return teacher_department_spetialty;
};
