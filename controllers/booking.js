const Booking = require("../modles/booking")



exports.getBooking=async(req,res)=>{
    try {
        let data = await Booking.find();
        res.status(200).json(data); // Send the data with a 200 OK status
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message }); // Send error details with a 500 Internal Server Error status
      }
}


// Get all customers with booking details
exports.listBooking = async (req, res) => {
    try {
      const bookings = await Booking.aggregate([
        {
          $lookup: {
            from: 'rooms', // Name of the rooms collection in MongoDB
            localField: 'roomId',
            foreignField: '_id',
            as: 'roomDetails'
          }
        },
        {
          $unwind: '$roomDetails'
        },
        {
          $project: {
            customerName: 1,
            date: 1,
            startTime: 1,
            endTime: 1,
            roomName: '$roomDetails.name'
          }
        }
      ]);
  
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.createBooking = async (req, res) => {
    try {
      let data = await Booking.create(req.body);
      res.status(201).json(data); // Send the created room data with a 201 Created status
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Bad request", error: error.message }); // Send error details with a 400 Bad Request status
    }
  };