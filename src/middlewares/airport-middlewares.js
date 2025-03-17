// This is the file to handle the airport middlewares

// importing http-status-codes
const {StatusCodes}=require("http-status-codes");

// importing success and error response
const {ErrorResponse}=require("../utils/common");

// importing app-error
const AppError = require("../utils/app/app-error");

// defining the validateCreateRequest function
function validateCreateRequest (req, res, next) {
    if(!req.body.name){
        ErrorResponse.message="Something went wrong while creating an airport";
        ErrorResponse.error=new AppError(["Airport name not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message="Something went wrong while creating an airport";
        ErrorResponse.error=new AppError(["City Id not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message="Something went wrong while creating an airport";
        ErrorResponse.error=new AppError(["Airport code name not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next();
}

// exporting the validateCreateRequest function
module.exports={
    validateCreateRequest
}