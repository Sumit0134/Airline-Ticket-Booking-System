// This is the file to handle the airport controller

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing airplane service
const { AirportService } = require("../services");

// importing success and error response
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST: /airports
 * req-body: {name: "Chennai", cityId: 8, code: CHE}
 */

// creating a new airport
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      cityId: req.body.cityId,
      address: req.body.address,
      code: req.body.code,
    });
    SuccessResponse.data = airport;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * GET: /airports
 * req-body: {}
 */

// getting all the airports
async function getAllAirports(req, res) {
  try {
    const airports = await AirportService.getAllAirports();
    SuccessResponse.data = airports;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * GET: /airports/:id
 * req-body: {}
 */

// getting a single airport
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * DELETE: /airports/:id
 * req-body: {}
 */

// deleting an airport
async function deleteAirport(req, res){
  try {
    const airport = await AirportService.deleteAirport(req.params.id);
    SuccessResponse.data = airport;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * PATCH: /airports/:id
 * req-body: {code: "CHN"}
 */

// updating an airport
async function updateAirport(req, res){
  try{
    const airport =await AirportService.updateAirport(req.params.id, req.body);
    SuccessResponse.data=airport;

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch(error){
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// exporting the createAirport function
module.exports = {
  createAirport,
  getAllAirports,
  getAirport,
  deleteAirport,
  updateAirport
};
