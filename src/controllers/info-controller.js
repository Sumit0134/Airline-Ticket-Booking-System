// This is the file to handle the info controller. This file has no relation with the project. It was created during the initial development of the project.

// importing http-status-codes
const {StatusCodes}=require("http-status-codes");

// defining the info function
const info=(req, res)=>{
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "OK",
        error: {},
        data: {}
    })
}

// exporting the info function
module.exports={
    info
}
