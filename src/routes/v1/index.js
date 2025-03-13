// This is the file to handle the v1 routes

// importing express
const express = require("express");

// creating the router
const router = express.Router();

// importing info controller
const { infoController } = require("../../controllers");

// importing airplane routes
const airplaneRoutes = require("./airplane-routes");

// /api/v1/info
router.get("/info", infoController.info);

// /api/v1/airplanes
router.use("/airplanes", airplaneRoutes);

// exporting the router
module.exports = router;
