'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 2,
        review: 'I spent a whole weekend there.  Only saw a few thousand snakes and got bitten like five times.  Kinda dissappointing.',
      },
      {
        userId: 3,
        spotId: 2,
        review: "Went on a research trip with a group of scientists and survived.  Can't say the same for the others...",
      },
      {
        userId: 2,
        spotId: 2,
        review: 'By the head of Medusa!'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
