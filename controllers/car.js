const fs = require("fs");
const Car = require("../models/cars");

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      length: cars.length,
      data: {
        cars,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  getAllCars,
};
