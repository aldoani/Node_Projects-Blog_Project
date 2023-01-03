const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  namnnge: {
    type: String,
    required: true,
  },
  namoie: {
    type: String,
    required: true,
  },
  namooe: {
    type: String,
    required: true,
  },
  namen: {
    type: String,
    required: true,
  },
  nasaeme: {
    type: String,
    required: true,
  },
  as: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
