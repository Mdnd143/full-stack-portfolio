import express from "express";
import mongoose from "mongoose";
import blogSchema from "./blogmodal.js";

export const addblog = async (req, res) => {
  try {
    const { title, category, description, file } = req.body;
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date();
    let name = month[date.getUTCMonth()];
     let createdAt = `${date.getDate()} ${name}, ${date.getFullYear()}`;
    const isrepeated = await blogSchema.findOne({ title });
    if (isrepeated)
      return res
        .status(404)
        .json("blog with this title already exist, try diffrent name");
    else if (!isrepeated) {
      const newblog = await new blogSchema({
        title,
        category,
        description,
        file,
        createdAt
      });
      await newblog.save();
      res.status(201).json(newblog);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateblog = async (req, res) => {
  let { id } = req.params;
  const { title, category, description, file } = req.body;

  try {
    const selectedblog = await blogSchema.findByIdAndUpdate(
      id,
      { title, category, description, file, _id: id },
      { new: true }
    );

    res.status(201).json(selectedblog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteblog = async (req, res) => {
  let { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json("no post with this id");
    await blogSchema.findByIdAndRemove(id);
    res.status(201).json(`blog successfully deleted `);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const getBlog = async (req, res) => {
  try {
    const allblog = await blogSchema.find();
    if (!allblog)
      return res.status(404).json("does not have any blog, try add some blog");
    else {
      res.status(201).json(allblog);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
