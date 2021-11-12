'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId:{
      type: DataTypes.INTEGER,
    },
    spotId: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
    Booking.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Booking;
};
