const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

const uploader = require("../middlewares/upload");

router.route("/").get(adminController.adminPage);

router
  .route("/create")
  .get(adminController.createCarPage)
  .post(uploader.single("image"), adminController.createCar);

router
  .route("/edit")
  .get(adminController.editCarPage)
  .post(adminController.editCar);

router.route("/delete/:id").get(adminController.deleteCar);

module.exports = router;
