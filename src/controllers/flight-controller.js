// This is the file to handle the flight controller

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing flight service
const { FlightService } = require("../services");

// importing success and error response
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST: /flights
 * req-body: {
 *    flightNumber: "UK 123",
 *    airplaneId: 1,
 *    departureAirportId: DEL,
 *    arrivalAirportId: KOL,
 *    departureTime: "2025-04-01 09:00:00",
 *    arrivalTime: "2025-04-01 12:00:00",
 *    price: 1000,
 *    boardingGate: "A1",
 *    totalSeats: 100
 * }
 */

// creating a new flight
async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats
    });
    SuccessResponse.data = flight;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// exporting the functions
module.exports = {
  createFlight,
};