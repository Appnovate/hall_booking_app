let mongoose = require("mongoose");

let roomSchema = new mongoose.Schema({
  name: { type: String, require: true },
  seatsAvaliables: { type: Number, require: true },
  amenities: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
});

module.exports = mongoose.model("Room", roomSchema);
