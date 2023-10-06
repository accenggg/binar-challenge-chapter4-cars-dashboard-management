const express = require("express");

const router = express.Router();

const carController = require("../controllers/car");

router.route("/").get(carController.getAllCars);

module.exports = router;
