// This is the file to handle the airplane middlewares

// importing http-status-codes
const {StatusCodes}=require("http-status-codes");

// importing success and error response
const {ErrorResponse}=require("../utils/common");

// importing app-error
const AppError = require("../utils/app/app-error");

// defining the validateCreateRequest function
function validateCreateRequest (req, res, next) {
    if(!req.body.modelNumber || !req.body.capacity){
        ErrorResponse.message="Something went wrong while creating an airplane";
        ErrorResponse.error=new AppError(["Model Number not found in the incoming request in the correct form"], StatusCodes.BAD_REQUEST)
        
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next();
}

// exporting the validateCreateRequest function
module.exports={
    validateCreateRequest
}