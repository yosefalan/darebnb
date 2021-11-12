// 'use strict';


// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Spots', [
//       {
//         email: 'demo@user.io',
//         username: 'Demo-lition',
//         hashedPassword: bcrypt.hashSync('password'),
//       },
//       {
//         email: faker.internet.email(),
//         username: 'FakeUser1',
//         hashedPassword: bcrypt.hashSync(faker.internet.password()),
//       },
//       {
//         email: faker.internet.email(),
//         username: 'FakeUser2',
//         hashedPassword: bcrypt.hashSync(faker.internet.password()),
//       },
//     ], {});
//   },

//   down: (queryInterface, Sequelize) => {
//     const Op = Sequelize.Op;
//     return queryInterface.bulkDelete('Spots', null, {});
//   }
// };
