// This is the file to handle the city controller

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing city service
const { CityService } = require("../services");

// importing success and error response
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST: /cities
 * req-body: {name: "Bangalore"}
 */

// creating a new city
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * DELETE: /cities/:id
 * req-body: {}
 */

// deleting a city
async function deleteCity(req, res) {
  try {
    const city = await CityService.deleteCity(req.params.id);
    SuccessResponse.data = city;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * PATCH: /cities/:id
 * req-body: {name: "Chennai"}
 */

// updating a city
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    SuccessResponse.data = city;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  deleteCity,
  updateCity,
};
