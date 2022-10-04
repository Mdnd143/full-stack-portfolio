import mongoose from "mongoose";

const technologyModel = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  file: String,
});
const technologySchema = mongoose.model("technology", technologyModel);
export default technologySchema;
