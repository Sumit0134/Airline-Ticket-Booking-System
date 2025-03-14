// This is the file to handle the city service

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing city repository
const { CityRepository } = require("../repositories");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the city repository object
const cityRepository = new CityRepository();

// creating a new city
async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new city object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// deleting a city
async function deleteCity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested city to delete does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// updating a city
async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested city to update does not exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot get an airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// exporting the city function
module.exports = {
  createCity,
  deleteCity,
  updateCity
};
