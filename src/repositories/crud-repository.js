// This is the file to handle the basic crud operations

// importing http-status-codes
const { StatusCodes } = require("http-status-codes");

// importing app-error
const AppError = require("../utils/app/app-error");

// creating the crud repository class
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // creating a new record
  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  // deleting a record
  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return response;
  }

  // getting a single record
  async get(data) {
    const response = await this.model.findByPk(data);
    if(!response){
      throw new AppError("The requested resource does not exist", StatusCodes.NOT_FOUND)
    }
    return response;
  }

  // getting all records
  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  // updating a record
  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
  }
}

// exporting the crud repository
module.exports = CrudRepository;
