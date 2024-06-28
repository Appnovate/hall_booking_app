const Room = require("../modles/room")



exports.getRoom=async(req,res)=>{
    try {
        let data = await Room.find();
        res.status(200).json(data); // Send the data with a 200 OK status
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message }); // Send error details with a 500 Internal Server Error status
      }
}


exports.createRoom = async (req, res) => {
    try {
      console.log(req);
      let data = await Room.create(req.body);
      res.status(201).json(data); // Send the created room data with a 201 Created status
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Bad request", error: error.message }); // Send error details with a 400 Bad Request status
    }
  };