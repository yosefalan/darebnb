'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        imageURL: 'https://darebnb.s3.us-east-2.amazonaws.com/amigo.jpg'
      },
      {
        email: 'fjmisty@mail.com',
        username: 'FJ Misty',
        hashedPassword: bcrypt.hashSync('password'),
        imageURL: 'https://darebnb.s3.us-east-2.amazonaws.com/Screenshot+2021-11-08+001109.jpg'
      },
      {
        email: 'david@mail.com',
        username: 'David',
        hashedPassword: bcrypt.hashSync('password'),
        imageURL: 'https://darebnb.s3.us-east-2.amazonaws.com/Screenshot+2021-11-08+001148.jpg'
      },
      {
        email: 'her@mail.com',
        username: 'H.E.R.',
        hashedPassword: bcrypt.hashSync('password'),
        imageURL: 'https://darebnb.s3.us-east-2.amazonaws.com/Screenshot+2021-11-08+000933.jpg'
      },
      {
        email: 'phoebe@mail.com',
        username: 'Phoebe',
        hashedPassword: bcrypt.hashSync('password'),
        imageURL: 'https://darebnb.s3.us-east-2.amazonaws.com/Screenshot+2021-11-08+001016.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'Yosefalan'] }
    }, {});
  }
};
