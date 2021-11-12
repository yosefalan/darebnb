'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    url:{
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Image;
};
