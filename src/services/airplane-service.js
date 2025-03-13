// This is the file to handle the airplane service

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing airplane repository
const { AirplaneRepository } = require("../repositories");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the airplane repository object
const airplaneRepository = new AirplaneRepository();

// creating a new airplane
async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// getting all the airplanes
async function getAllAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot get all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// getting a single airplane
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested airplane does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// exporting the createAirplane function
module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
};
