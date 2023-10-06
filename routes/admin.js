const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.route("/").get(adminController.adminPage);

router
  .route("/create")
  .get(adminController.createCarPage)
  .post(adminController.createCar);

router
  .route("/edit")
  .get(adminController.editCarPage)
  .post(adminController.editCar);

router.route("/delete/:id").get(adminController.deleteCar);

module.exports = router;
