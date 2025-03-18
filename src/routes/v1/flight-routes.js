// This is the file to handle the flight routes

// importing express
const express = require("express");

// importing flight controller
const { FlightController } = require("../../controllers");

// importing flight middlewares
const { FlightMiddlewares } = require("../../middlewares");

// creating the router
const router = express.Router();

// /api/v1/flights POST
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

// exporting the router
module.exports = router;
