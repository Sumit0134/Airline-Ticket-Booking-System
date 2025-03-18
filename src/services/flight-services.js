// This is the file to handle the flight service

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing flight repository
const { FlightRepository } = require("../repositories");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the flight repository object
const flightRepository = new FlightRepository();

// creating a new flight
async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// exporting the flight service
module.exports = {
  createFlight,
};