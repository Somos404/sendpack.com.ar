'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Packages.init({
    km: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    
    time: DataTypes.STRING,
    pago_en: DataTypes.BOOLEAN,
    cant_bultos: DataTypes.INTEGER,
    valor_declarado: DataTypes.INTEGER,
    costo_estimado: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Packages',
  });
  return Packages;
};