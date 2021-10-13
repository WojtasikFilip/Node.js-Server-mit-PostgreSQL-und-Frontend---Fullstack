const asyncHandler = require('express-async-handler');
const carFunction = require('../model/cars');

const getCars = asyncHandler(async (req, res) => {
  const { code, data } = await carFunction.getCars();
  res.status(code).json(data);
});

const changeStatusCar = asyncHandler(async (req, res) => {
  const { code, data } = await carFunction.changeStatusCar(req.params.id, req.body);
  res.status(code).json(data);
});

const deleteCar = asyncHandler(async (req, res) => {
  const { code, data } = await carFunction.deleteCar(req.params.id);
  res.status(code).json(data);
});

const addCar = asyncHandler(async (req, res) => {
  const { code, data } = await carFunction.addCar(req.body);
  res.status(code).json(data);
});

module.exports = { getCars, changeStatusCar, deleteCar, addCar };
