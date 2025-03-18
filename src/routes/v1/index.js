// This is the file to handle the v1 routes

// importing express
const express = require("express");

// creating the router
const router = express.Router();

// importing info controller
const { infoController } = require("../../controllers");

// importing airplane routes
const airplaneRoutes = require("./airplane-routes");

// importing city routes
const cityRoutes = require("./city-routes");

// importing airport routes
const airportRoutes = require("./airport-routes");

// importing flight routes
const flightRoutes = require("./flight-routes");

// /api/v1/info
router.get("/info", infoController.info);

// /api/v1/airplanes
router.use("/airplanes", airplaneRoutes);

// /api/v1/cities
router.use("/cities", cityRoutes);

// /api/v1/airports
router.use("/airports", airportRoutes);

// /api/v1/flights
router.use("/flights", flightRoutes);

// exporting the router
module.exports = router;
