const express = require('express');
const Sequelize = require('sequelize');
const { Spot, Review } = require('../../db/models');
const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser } = require('../../utils/auth');
// const { User } = require('../../db/models');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const Op = Sequelize.Op;
const router = express.Router();



router.get(
  '/:query',
  asyncHandler(async(req, res) => {
  // res.json({ requestBody: req.body });
  console.log("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", req.params.query)
  const query = req.params.query;
  const spots = await Spot.findAll({
      where: {
        [Op.or]: [
      { name: { [Op.iLike]: `%${query}%` }},
      { description: { [Op.iLike]: `%${query}%` }},
      { city: { [Op.iLike]: `%${query}%` }},
      { country: { [Op.iLike]: `%${query}%` }}
        ]
      }
  });
    const reviews = await Review.findAll({
      incude: [{ model: Spot }],
      where: {
      review: { [Op.iLike]: `%${query}%` },
      }
  });
  console.log("************************", {spots, reviews });
  return res.json({ spots, reviews })
}));



// router.get(
//   "/search",
//   // requireAuth,
//   asyncHandler(async (req, res) => {
//     console.log("REQQQQQQQQQQQQQQQQQQQQ", req)
//     // const query = req.query;
//     // const userId = res.locals.user.id;
//     // const lists = await db.Spot.findAll({ where: { userId } });
//     // const tasks = await db.Review.findAll({
//     //   where: { taskContent: { [Op.iLike]: `%${query}%` }, userId: userId },
//     // });
//     // res.render("main", { });
//   })
// );


module.exports = router;
