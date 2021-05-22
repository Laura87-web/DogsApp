
const {Sequelize, DataTypes} = require("sequelize") 
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('raza', {
    id:{
      type:DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,//encontre en documentacion de sequelize
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
    }
    

  });
};
