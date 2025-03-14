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

module.exports = {
  createCity,
};
