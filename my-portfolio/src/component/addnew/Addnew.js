import React, { useState } from "react";
import "./Addnew.css";
import { createBlog } from "../actions/blogActions";
import { useDispatch } from "react-redux";
import addnew from "../../multimedia/images/addnew.svg";
import { BiAddToQueue } from "react-icons/bi";
import { createProject } from "../actions/projectActions";
export default function Addnew() {
  const [project, setProject] = useState(false);
  const [blog, setBlog] = useState(true);
  const [warn, setWarn] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    technology: "",
    liveLink: "",
    sourceCode: "",
    description: "",
  });
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    if (project) {
      if (
        formData.title !== "" &&
        formData.technology !== "" &&
        formData.liveLink !== "" &&
        formData.sourceCode !== ""
      ) {
        dispatch(createProject(formData));
        setFormData({
          title: "",
          category: "",
          liveLink: "",
          technology: "",
          sourceCode: "",
          description: "",
        });
        setWarn(false);
      } else {
        setWarn(true);
      }
    } else if (blog) {
      if (
        formData.title !== "" &&
        formData.category !== "" &&
        formData.description !== ""
      ) {
        dispatch(createBlog(formData));
        setWarn(false);
        setFormData({
          title: "",
          category: "",
          liveLink: "",
          technology: "",
          sourceCode: "",
          description: "",
        });
      } else {
        setWarn(true);
      }
    } else if (!project && !blog) {
      
    }
  };

  return (
    <div className="addnew-container">
      <header className="new-header">
        <div className="head">
          <img className="addnew-img" src={addnew} alt="" />
          <h1 className="addnew-title">
            Add a new{" "}
            <span style={{ color: "grey" }}>{blog ? "Blog" : "Project"}</span>
          </h1>
        </div>
        <ul className="new-options">
          {/* <li className='new-option' onClick={()=>{setBlog(false); setProject(false)}}>Technology</li> */}
          <li
            className="new-option"
            onClick={() => {
              setBlog(false);
              setProject(true);
            }}
          >
            Project
          </li>
          <li
            className="new-option"
            onClick={() => {
              setBlog(true);
              setProject(false);
            }}
          >
            Blog
          </li>
        </ul>
      </header>
      <form className="new-form">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="title"
          required={true}
        />
        {/* t p b */}
        {blog && (
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            placeholder="category e.q #technology"
            required={true}
          />
        )}
        {/* b */}
        {project && (
          <input
            type="text"
            value={formData.technology}
            onChange={(e) =>
              setFormData({ ...formData, technology: e.target.value })
            }
            placeholder="technology used"
            required={true}
          />
        )}
        {/* p */}
        {!project && (
          <textarea
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="description"
            required={true}
          />
        )}
        {/* b */}
        {project && (
          <input
            type="link"
            value={formData.liveLink}
            onChange={(e) =>
              setFormData({ ...formData, liveLink: e.target.value })
            }
            placeholder="live link"
            required={true}
          />
        )}
        {/* p */}
        {project && (
          <input
            type="link"
            value={formData.sourceCode}
            onChange={(e) =>
              setFormData({ ...formData, sourceCode: e.target.value })
            }
            placeholder="source code"
            required={true}
          />
        )}
        {/* p */}
        <input type="file" /> {/* t p b */}
        {warn && <p style={{ color: "red" }}>All fields are required</p>}
        <button onClick={submitForm}>
          <BiAddToQueue /> Add
        </button>
      </form>
    </div>
  );
}
