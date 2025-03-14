// This is the file to handle the city routes

// importing express
const express = require("express");

// importing city controller
const { CityController } = require("../../controllers");

// importing city middlewares
const { CityMiddlewares } = require("../../middlewares");

// creating the router
const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

// /api/v1/cities DELETE
router.delete("/:id", CityController.deleteCity);

// /api/v1/cities/:id PATCH
router.patch("/:id", CityController.updateCity);

// exporting the router
module.exports = router;
