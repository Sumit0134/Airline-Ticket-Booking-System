// This is the file to handle the flight middlewares

// importing http-status-codes
const {StatusCodes}=require("http-status-codes");

// importing success and error response
const {ErrorResponse}=require("../utils/common");

// importing app-error
const AppError = require("../utils/app/app-error");

// defining the validateCreateRequest function
function validateCreateRequest (req, res, next) {
    if(!req.body.flightNumber){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Flight number not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Airplane Id not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Depature airport Id not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Arrival airport Id not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.departureTime){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Depature time not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Arrival time not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.price){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Price not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.totalSeats){
        ErrorResponse.message="Something went wrong while creating a flight";
        ErrorResponse.error=new AppError(["Total seats not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next();
}

// exporting the validateCreateRequest function
module.exports={
    validateCreateRequest
}