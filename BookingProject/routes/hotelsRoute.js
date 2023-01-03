const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotelModel.js");

router.post("/add-hotel", async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
});
router.put("/edit-hotel/:id", async (req, res, next) => {
  try {
    const edithotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(edithotel);
  } catch (error) {
    next(error);
  }
});
router.delete("/delete-hotel/:id", async (req, res, next) => {
  try {
    const deletehotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(500).json(deletehotel);
  } catch (error) {
    next(error);
  }
});
router.get("/get-hotel/:id", async (req, res, next) => {
  try {
    await Hotel.findById(req.params.id);
    res.status(200).json("it has been deleted");
  } catch (error) {
    next(error);
  }
});
router.get("/get-hotels", async (req, res, next) => {
  try {
    const thehotels = await Hotel.find();
    res.status(200).json(thehotels);
  } catch (error) {
    next(error);
  }
});
/////Trying To get the 5 star rating///

router.get("/ratefive", async (req, res, next) => {
  try {
    const best = await Hotel.find({ rating: 5 });
    res.status(200).json(best);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
