import express from "express";
import mongoose from "mongoose";
import projectSchema from "./projectModal.js";

export const addProject = async (req, res) => {
  try {
    const { title, technology, category, liveLink, sourceCode } = req.body;
    const isrepeated = await projectSchema.findOne({ title });
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date();
    let name = month[date.getUTCMonth()];
     let createdAt = `${date.getDate()} ${name}, ${date.getFullYear()}`;
    if (isrepeated)
      return res
        .status(404)
        .json("project with this title already exist, try diffrent name");
    else if (!isrepeated) {
      const newProject = await new projectSchema({
        title,
        technology,
        category,
        liveLink,
        sourceCode,
        createdAt
      });
      await newProject.save();
      res.status(201).json(newProject);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateProject = async (req, res) => {
  let { id } = req.params;
  const { title, technology, category, liveLink, sourceCode } = req.body;

  try {
    const selectedPoroject = await projectSchema.findByIdAndUpdate(
      id,
      { title, technology, category, liveLink, sourceCode, _id: id },
      { new: true }
    );

    res.status(201).json(selectedPoroject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("no post with this id");
  await projectSchema.findByIdAndRemove(id);
  res.status(201).json("project successfully deleted");
};
export const getProject = async (req, res) => {
  try {
    const allPoroject = await projectSchema.find();
    if (!allPoroject)
      return res
        .status(404)
        .json("does not have any project, try add some projects");
    else {
      res.status(201).json(allPoroject);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
