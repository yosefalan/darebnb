'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address:{
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING(50),
    },
    state: {
      type:DataTypes.STRING(50),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    lat: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    lng: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    price: {
      type: DataTypes.DECIMAL
    },
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Review, { foreignKey: 'spotId' });
    Spot.hasMany(models.Image, { foreignKey: 'spotId' });
    Spot.hasOne(models.Booking, { foreignKey: 'spotId' });
  };
  return Spot;
};
