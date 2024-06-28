const mongoose = require("mongoose");

const connectdb = () => {
  mongoose
    .connect("mongodb://localhost:27017/hallBooking")
    .then(() => {
      console.log("Db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports=connectdb