import mongoose from "mongoose";

const blogModel = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: String },
  file: String,
});
const blogSchema = mongoose.model("blog", blogModel);
export default blogSchema;
