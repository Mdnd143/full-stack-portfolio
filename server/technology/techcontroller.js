import express from "express";
import technologySchema from "./techmodal.js";

export const addtechnology = async (req, res) => {
  try {
    const { title, description, file } = req.body;
    const isrepeated = await technologySchema.findOne({ title });
    if (isrepeated)
      return res
        .status(404)
        .json("tech with this title already exist, try diffrent name");
    else if (!isrepeated) {
      const newtech = await new technologySchema({ title, description, file });
      await newtech.save();
      res.status(201).json(newtech);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatetechnology = async (req, res) => {
  let { id } = req.params;
  const { title, description, file } = req.body;

  try {
    const selectedtech = await technologySchema.findByIdAndUpdate(
      id,
      { title, description, file, _id: id },
      { new: true }
    );

    res.status(201).json(selectedtech);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deletetechnology = async (req, res) => {
  let { _id } = req.params;
  try {
    debugger;
    await technologySchema.findByIdAndRemove(_id);

    res.status(201).json("tech successfully deleted");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getTechnology = async (req, res) => {
  try {
    const alltechnology = await technologySchema.find();
    if (!alltechnology)
      return res
        .status(404)
        .json("does not have any technology, try add some technology");
    else {
      res.status(201).json(alltechnology);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
