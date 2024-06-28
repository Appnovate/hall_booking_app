const mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  status: { type: String, required: true, default: "confirmed" },
  bookingDate: { type: Date, required: true, default: Date.now },
});

module.exports= mongoose.model('Booking',bookingSchema)