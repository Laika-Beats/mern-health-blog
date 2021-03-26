const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/post.js");

// GET ALL Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE Post
router.get("/:id", getPost, (req, res) => {
  res.json(res.post);
});

// CREATE Post
router.post("/", async (req, res) => {
  const post = new Post({
    message: req.body.message,
    category: req.body.category,
  });
  try {
    const newPost = await post.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE Post
router.delete("/:id", getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Post has been deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Post

// Middleware
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post === null) {
      return status(404).json({ message: "Cannot find blog post." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.post = post;
  next();
}

module.exports = router;
