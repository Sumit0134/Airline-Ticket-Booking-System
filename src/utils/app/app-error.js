// This is the file to handle the app error

// creating the app error
class AppError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode=statusCode
        this.explanation=message
    }
}

// exporting the app error
module.exports=AppError