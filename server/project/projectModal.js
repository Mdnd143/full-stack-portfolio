import mongoose from "mongoose";

const projectModel = mongoose.Schema({
  title: { type: String, required: true },
  technology: { type: String, required: true },
  createdAt: { type: String },
  liveLink: { type: String, required: true },
  sourceCode: { type: String, required: true },
  file: String,
});
const projectSchema = mongoose.model("project", projectModel);
export default projectSchema;
