// This is the file to handle the airport routes

// importing express
const express=require("express");

// importing airport controller
const { AirportController } = require("../../controllers");

// importing airport middlewares
const {AirportMiddlewares}=require("../../middlewares");

// creating the router
const router=express.Router();

// /api/v1/airports POST
router.post("/", AirportMiddlewares.validateCreateRequest, AirportController.createAirport);

// /api/v1/airports GET
router.get("/", AirportController.getAllAirports);

// /api/v1/airports/:id GET
router.get("/:id", AirportController.getAirport);

// /api/v1/airports/:id DELETE
router.delete("/:id", AirportController.deleteAirport);

// /api/v1/airports/:id PATCH
router.patch("/:id", AirportController.updateAirport);

// exporting the router
module.exports=router;

