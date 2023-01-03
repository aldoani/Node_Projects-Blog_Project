const express = require("express");
const Room = require("../models/roomModel.js");

const router = express.Router();

router.post("/add-room", async (req, res, next) => {
  try {
    const newRoom = new Room(req.body);
    const saveRoom = await newRoom.save();
    res.status(200).json(saveRoom);
  } catch (error) {
    next(error);
  }
});
router.put("/edit-room/:id", async (req, res, next) => {
  try {
    const editRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(editRoom);
  } catch (error) {
    next(error);
  }
});
router.delete("/delete-room/:id", async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("it has been deleted");
  } catch (error) {
    next(error);
  }
});
router.get("/get-room", async (req, res, next) => {
  try {
    const oneRoom = await Room.findById(req.params.id);
    res.status(200).json(oneRoom);
  } catch (error) {
    next(error);
  }
});
router.get("/get-allrooms", async (req, res, next) => {
  try {
    const allRoom = await Room.find();
    res.status(200).json(allRoom);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
