import React, { useEffect, useState } from "react";
import project from "../../multimedia/images/undraw_my_app_re_gxtj.svg";
import noImage from "../../multimedia/images/no-image.PNG";
import { FaCode, FaLink } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { deleteProject, getAllProject } from "../actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import UpdateNew from "../addnew/UpdateNew";
import "./Projects.css";
import Spinn from "../spinner/Spinn";
export default function Project() {
  const devMode = useSelector((state) => state.devmodeReducer);
  const [showEdit, setShowEdit] = useState(false);
  const [isDev, setIsDev] = useState(devMode);
  const [showSpinn, setShowSpinn] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [editItem, setEditItem] = useState({});
  useEffect(() => {
    dispatch(getAllProject());
  }, []);
  const [allProjects, setAllProjects] = useState([]);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer);
  useEffect(() => {
    if (projects.length > 0) {
      setAllProjects(projects);
    } else if (projects.project && projects.project.length > 0) {
      setAllProjects(projects.project);
    }
    setShowSpinn(allProjects.length>0?false:true)
  }, [projects]);
  useEffect(() => {
    if (devMode.isDevMode !== undefined) {
      setIsDev(devMode.isDevMode);
    } else {
      setIsDev(devMode);
    }
  }, [devMode, isDev]);
  window.onclick = function (event) {
    if (event.target.className == "edit-modal") {
      setShowEdit(false);
    }
  };
  return (
    <div className="project-container">
      <div className="header">
        <img src={project} alt="" />
        <h1>All projects</h1>
      </div>
      {showEdit && (
        <div id="editModal" className="edit-modal">
          <div className="edit-modal-content">
            <UpdateNew title="Project" el={editItem} />
          </div>
        </div>
      )}
      {showDelete && (
        <div id="deleteModal" className="delete-modal">
          <div className="delete-modal-content delete-modal-body">
            <div>
              {" "}
              You will no longer be able to see this Blog again. Are you sure,
              to delete this Blog?
            </div>
            <div className="delete-modal-btn">
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  dispatch(deleteProject(deleteId));
                  setShowDelete(false);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setShowDelete(false)}
                style={{ backgroundColor: "green" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showSpinn && <Spinn/>}
      <div className="project-child">
        {allProjects?.map((el) => {
          return (
            <div className="project-card" key={el._id}>
              {/* <img src={noImage} alt="" /> */}
              <div className="text-container">
                <h1>{el.title}</h1>
                <p>
                  <i className="date-created">{el.createdAt}</i>
                </p>
                <p className="project-tag"><p>Technology used</p><span className="project-tech">{el.technology}</span></p>
                <p>{el.description}</p>
              </div>
              <div className="project-btn-container">
                {isDev && (
                  <div
                    onClick={() => {
                      setShowDelete(true);
                      setDeleteId(el._id);
                    }}
                  >
                    <MdDelete title="delete" />
                  </div>
                )}
                <a href={el.sourceCode}>
                  <FaCode title="source code" />
                </a>
                <a href={el.liveLink}>
                  <FaLink title="live link" />
                </a>
                {isDev && (
                  <div
                    onClick={() => {
                      setShowEdit(true);
                      setEditItem(el);
                    }}
                  >
                    <FiEdit />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
