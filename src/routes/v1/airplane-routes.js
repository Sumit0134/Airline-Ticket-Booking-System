// This is the file to handle the airplane routes

// importing express
const express = require("express");

// importing airplane controller
const { AirplaneController } = require("../../controllers");

// importing airplane middlewares
const { AirplaneMiddlewares } = require("../../middlewares");

// creating the router
const router = express.Router();

// /api/v1/airplanes POST
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get("/", AirplaneController.getAllAirplanes);

// /api/v1/airplanes/:id GET
router.get("/:id", AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete("/:id", AirplaneController.deleteAirplane);

// /api/v1/airplanes/:id PATCH
router.patch("/:id", AirplaneController.updateAirplane);

// exporting the router
module.exports = router;
