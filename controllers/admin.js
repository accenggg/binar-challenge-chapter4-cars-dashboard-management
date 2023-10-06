const Car = require("../models/cars");

// console.log(form);

const adminPage = async (req, res) => {
  let fullUrl = "http://localhost:3000/dashboard";
  try {
    const url = req.url;
    let seat = 0;
    if (url === "/?category=small") {
      fullUrl += url.slice(1);
      seat = 1;
    } else if (url === "/?category=medium") {
      fullUrl += url.slice(1);
      seat = 4;
    } else if (url === "/?category=large") {
      fullUrl += url.slice(1);
      seat = 7;
    }

    const { category, search } = req.query;

    const condition = {};

    if (category) {
      condition.seats = { $gte: Number(seat), $lt: Number(seat) + 3 };
    }

    console.log("ini kondisi");
    console.log(condition.seats);

    if (search) {
      condition.name = new RegExp(search, "i");
    }

    // }

    // seats >= 1 : seats = 1,2,3 ... dan
    // seats < 4 : seats = 1,0 ...

    // seats >= 4 : seats = 1,2,3 ... dan
    // seats < 7 : seats = 1,0 ...

    // seats >= 7 : seats = 1,2,3 ... dan
    // seats < 10 : seats = 1,0 ...

    const cars = await Car.find().where(condition).exec();
    console.log(cars);
    res.render("index", {
      title: "dashboard",
      fullUrl,
      cars,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const createCarPage = async (req, res) => {
  try {
    // const newCar = await Car.create(req.body);
    res.render("create", {
      title: "create car",
      // cars,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const editCarPage = async (req, res) => {
  try {
    const car = await Car.find().where({
      _id: req.query.id,
    });
    res.render("edit", {
      car,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    await Car.create(req.body);
    console.log(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const editCar = async (req, res) => {
  try {
    const id = req.query.id;
    const now = new Date().toDateString();
    const updateCar = {
      ...req.body,
      lastModified: now,
    };

    await Car.findByIdAndUpdate(id, updateCar, {
      new: true,
    });
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    await Car.findByIdAndRemove(id);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  adminPage,
  createCarPage,
  editCarPage,
  createCar,
  editCar,
  deleteCar,
};
