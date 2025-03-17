// This is the file to handle the airport service

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing airport repository
const { AirportRepository } = require("../repositories");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the airport repository object
const airportRepository = new AirportRepository();

// creating a new airport
async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// getting all the airports
async function getAllAirports() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot get all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// getting a single airport
async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested airport does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// deleting an airport
async function deleteAirport(id) {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested airport to delete does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// updating an airport
async function updateAirport(id, data){
  try {
    const airport=await airportRepository.update(id, data);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested airport to update does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// exporting the airport function
module.exports = {
  createAirport,
  getAllAirports,
  getAirport,
  deleteAirport,
  updateAirport
};
