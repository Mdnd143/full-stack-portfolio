import express from "express";
import {
  addblog,
  deleteblog,
  getBlog,
  updateblog,
} from "./blog/blogcontroller.js";
import {
  addProject,
  getProject,
  updateProject,
  deleteProject,
} from "./project/projectController.js";
import {
  addtechnology,
  deletetechnology,
  getTechnology,
  updatetechnology,
} from "./technology/techcontroller.js";

const router = express.Router();

// project
router.get("/projects", getProject);
router.post("/addproject", addProject);
router.patch("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

// blog
router.get("/blogs", getBlog);
router.post("/addblog", addblog);
router.patch("/blogs/:id", updateblog);
router.delete("/blogs/:id", deleteblog);

// technology
router.get("/technologies", getTechnology);
router.post("/addtechnology", addtechnology);
router.patch("/technology/:id", updatetechnology);
router.delete("/technology/:id", deletetechnology);

export default router;
