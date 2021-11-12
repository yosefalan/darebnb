const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image, User, Review } = require('../../db/models');
const { singlePublicFileUpload, singleMulterUpload, multiplePublicFileUpload, multipleMulterUpload } = require('../../awsS3');

const router = express.Router();

router.get('/',
asyncHandler(async(req, res) => {
  const spots = await Spot.findAll({
    include: [
      { model: Image },
    ]
  });
  return res.json(spots);
}));

router.get('/:id(\\d+)',
  asyncHandler(async(req, res) => {

    const spot = await Spot.findByPk((+req.params.id),
    {
      include: [
        { model: Review },
        { model: Image },
        { model: User },
      ]
    });
    return res.json(spot);
  }));


router.post(
  "/add",
  multipleMulterUpload("images"),
  asyncHandler(async (req, res) => {
    const {
      userId,
      name,
      city,
      country,
      lat,
      lng,
      description,
      images
    } = req.body;
    const imagesURL = await multiplePublicFileUpload(req.files);
    const spot = await Spot.create({
      userId,
      name,
      city,
      country,
      lat,
      lng,
      description,
    });
    const spotId = spot.id
    const urls = await
    imagesURL.map(url => {
    Image.create({
        spotId,
        url
      })
    })
    return res.json({
      spot
    });
  })
);

router.put(
  '/:id',
  asyncHandler(async(req, res) => {
    const spot = await Spot.findByPk(+req.params.id);
    await spot.update(req.body);
    return res.json(spot);
  })
);

router.delete(
  '/:id',
  asyncHandler(async(req, res) => {
    const spot = await Spot.findByPk(+req.params.id);
    spot.destroy()
  })
);

module.exports = router;
