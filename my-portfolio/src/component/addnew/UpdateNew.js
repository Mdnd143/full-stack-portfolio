import React, { useEffect, useState } from "react";
import "./Addnew.css";
import { updateBlog } from "../actions/blogActions";
import { updateProject } from "../actions/projectActions";
import { useDispatch } from "react-redux";
import editImg from "../../multimedia/images/foreditpage.png";
import { BiAddToQueue } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function UpdateNew(p) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    technology: "",
    liveLink: "",
    sourceCode: "",
    description: "",
  });
  const [warn, setWarn] = useState(false);
  const dispatch = useDispatch();
  function autofill() {
    if (p.title === "Blog") {
      setFormData({
        title: `${p.el.title}`,
        category: `${p.el.category}`,
        description: `${p.el.description}`,
      });
    }
    if (p.title === "Project") {
      setFormData({
        title: `${p.el.title}`,
        liveLink: `${p.el.liveLink}`,
        sourceCode: `${p.el.sourceCode}`,
        technology: `${p.el.technology}`,
      });
    }
    if (p.title === "Technology") {
      setFormData({
        title: `${p.el.title}`,
        description: `${p.el.description}`,
      });
    }
  }
  useEffect(() => {
    autofill();
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    if (p.title === "Project") {
      if (
        formData.title !== "" &&
        formData.technology !== "" &&
        formData.liveLink !== "" &&
        formData.sourceCode !== ""
      ) {
        dispatch(updateProject(formData, p.el._id));
        setFormData({
          title: "",
          category: "",
          liveLink: "",
          technology: "",
          sourceCode: "",
          description: "",
        });
        setWarn(false);
        navigate('/projects')
      } else {
        setWarn(true);
      }
    } else if (p.title === "Blog") {
      if (
        formData.title !== "" &&
        formData.category !== "" &&
        formData.description !== ""
      ) {
        dispatch(updateBlog(formData, p.el._id));
        setWarn(false);
        setFormData({
          title: "",
          category: "",
          liveLink: "",
          technology: "",
          sourceCode: "",
          description: "",
        });
        navigate('/blogs')
      } else {
        setWarn(true);
      }
    } else if (p.title === "Technology") {
    }
    setFormData({
      title: "",
      category: "",
      liveLink: "",
      technology: "",
      sourceCode: "",
      description: "",
    });
  };
  return (
    <div className="edit-new-container">
      <header className="new-header">
        <div className="head">
          <img className="addnew-img" src={editImg} alt="" />
          <h1 className="addnew-title">Update <span style={{color:'grey'}}>{p.title}</span></h1>
        </div>
      </header>
      <form className="new-form">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="title"
        />
        {/* t p b */}
        {p.title === "Blog" && (
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            placeholder="category e.q #technology"
          />
        )}
        {/* b */}
        {p.title === "Project" && (
          <input
            type="text"
            value={formData.technology}
            onChange={(e) =>
              setFormData({ ...formData, technology: e.target.value })
            }
            placeholder="technology used"
          />
        )}
        {/* p */}
        {p.title !== "Project" && (
          <textarea
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="description"
          />
        )}
        {/* b */}
        {p.title === "Project" && (
          <input
            type="link"
            value={formData.liveLink}
            onChange={(e) =>
              setFormData({ ...formData, liveLink: e.target.value })
            }
            placeholder="live link"
          />
        )}
        {/* p */}
        {p.title === "Project" && (
          <input
            type="link"
            value={formData.sourceCode}
            onChange={(e) =>
              setFormData({ ...formData, sourceCode: e.target.value })
            }
            placeholder="source code"
          />
        )}
        {/* p */}
        <input type="file" /> {/* t p b */}
        {warn && <p style={{ color: "red" }}>All fields are required</p>}
        <button onClick={(e) => submitForm(e)}>
          <BiAddToQueue />
          Update
        </button>
      </form>
    </div>
  );
}
