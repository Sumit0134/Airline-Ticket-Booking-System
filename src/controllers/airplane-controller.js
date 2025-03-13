// This is the file to handle the airplane controller

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing airplane service
const { AirplaneService } = require("../services");

// importing success and error response
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST: /airplanes
 * req-body: {modelNumber: "airbus a330", capacity: 180}
 */

// creating a new airplane
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * GET: /airplanes
 * req-body: {}
 */

// getting all the airplanes
async function getAllAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAllAirplanes();
    SuccessResponse.data = airplanes;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * GET: /airplanes/:id
 * req-body: {}
 */

// getting a single airplane
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * DELETE: /airplanes/:id
 * req-body: {}
 */

// deleting an airplane
async function deleteAirplane(req, res){
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id);
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * PATCH: /airplanes/:id
 * req-body: {ModelNumber: "airbus a330", capacity: 200}
 */

// updating an airplane
async function updateAirplane(req, res){
  try{
    const airplane =await AirplaneService.updateAirplane(req.params.id, req.body);
    SuccessResponse.data=airplane;

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch(error){
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// exporting the createAirplane function
module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane
};
