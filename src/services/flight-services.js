// This is the file to handle the flight service

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing flight repository
const { FlightRepository } = require("../repositories");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the flight repository object
const flightRepository = new FlightRepository();

// importing operator
const { Op } = require("sequelize");

// importing compare time
const { CompareTime } = require("../utils/helpers/dateTime-helper");

// creating a new flight
async function createFlight(data) {
  try {
    if (CompareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError(
        "Arrival time should be greater than departure time",
        StatusCodes.BAD_REQUEST
      );
    }
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
    if (error.statusCode === StatusCodes.BAD_REQUEST) {
      throw new AppError(
        "Arrival time should be greater than departure time",
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// getting flights based on query params
async function getAllFlights(query) {
  if (query) {
    let customFilter = {};
    const tripEndingTime=" 23:59:00";

    // based on trips = MUM-DEL
    if (query.trips) {
      [departureAirportId, arrivalAirportId] = query.trips.split("-");
      customFilter.departureAirportId = departureAirportId;
      customFilter.arrivalAirportId = arrivalAirportId;

      if (customFilter.departureAirportId === customFilter.arrivalAirportId) {
        throw new AppError(
          "Departure and arrival airport cannot be same",
          StatusCodes.BAD_REQUEST
        );
      }
    }

    // based on price
    if (query.price) {
      [minPrice, maxPrice] = query.price.split("-");
      customFilter.price = {
        [Op.between]: [minPrice, ((maxPrice===undefined)?20000:maxPrice)],
      };
    }

    // based on number of travellers
    if(query.travellers){
      customFilter.totalSeats={
        [Op.gte]: query.travellers
      }
    }

    // based on departure date
    if(query.tripDate){
      customFilter.departureTime={
        [Op.between]: [query.tripDate, query.tripDate+tripEndingTime]
      }
    }

    try {
      const flights = await flightRepository.getAllFlights(customFilter);
      return flights;
    } catch (error) {
      throw new AppError(
        "Cannot get all the flights",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

// exporting the flight service
module.exports = {
  createFlight,
  getAllFlights,
};
