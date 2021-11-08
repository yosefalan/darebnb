const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload, multiplePublicFileUpload } = require('../../awsS3');

const router = express.Router();





router.post(
  "/add",
  singleMulterUpload("images"),
  asyncHandler(async (req, res) => {
    const {
      userId,
      name,
      address,
      city,
      state,
      country,
      lat,
      lng,
      price,
      images
    } = req.body;
    const images = await singlePublicFileUpload(req.file);
    const user = await Spot.create({
      username,
      email,
      password,
      imageURL,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);
