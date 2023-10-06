const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "car name is required"],
  },
  priceRent: {
    type: Number,
    required: [true, "Price rent is required"],
  },
  seats: {
    type: Number,
    default: 4,
  },
  type: {
    type: String,
    require: [true, "car type is require"],
  },
  image: {
    type: String,
    default:
      "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
  },
  lastModified: {
    type: String,
    default: new Date().toDateString(),
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
