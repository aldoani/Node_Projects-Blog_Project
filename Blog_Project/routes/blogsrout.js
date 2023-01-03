const express = require("express");
const Blog = require("../models/blogmodel.js");
const router = express.Router();

router.post("/add-blog", async (req, res, next) => {
  const newBlog = await Blog(req.body);
  try {
    const saveblog = await newBlog.save();
    res.status(200).json(saveblog);
  } catch (err) {
    next(err);
  }
});
router.put("/update/:id", async (req, res, next) => {
  try {
    const updateblog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateblog);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("it has been deleted");
  } catch (error) {
    next(error);
  }
});
router.get("/find/:id", async (req, res, next) => {
  try {
    const oneBlog = await Blog.findById(req.params.id);
    res.json(oneBlog);
  } catch (err) {
    next(err);
  }
});
router.get("/all", async (req, res, next) => {
  try {
    const oneBlog = await Blog.find();
    res.json(oneBlog);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
