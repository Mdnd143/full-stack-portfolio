import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlog, deleteBlog } from "../actions/blogActions";
import { CgDetailsMore } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import project from "../../multimedia/images/undraw_Blog_post_re_fy5x.png";
import projectnull from "../../multimedia/images/undraw_photograph_re_up3b.svg";
import { Link } from "react-router-dom";
import UpdateNew from "../addnew/UpdateNew";
import Spinn from "../spinner/Spinn";
export default function Blog() {
  const devMode = useSelector((state) => state.devmodeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
  const [allBlogs, setAllBlogs] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showSpinn, setShowSpinn] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDev, setIsDev] = useState(devMode);
  const [editItem, setEditItem] = useState({});
  const [deleteId, setDeleteId] = useState("");
  const blogs = useSelector((state) => state.blogReducer);
  useEffect(() => {
    if (blogs.length > 0) {
      setAllBlogs(blogs);
    } else if (blogs.blog && blogs.blog.length > 0) {
      setAllBlogs(blogs.blog);
    }
    setShowSpinn(allBlogs.length>0?false:true)
  }, [blogs]);
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
        <h1>All Blogs</h1>
      </div>
      {showEdit && (
        <div id="editModal" className="edit-modal">
          <div className="edit-modal-content">
            <UpdateNew title="Blog" el={editItem} />
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
                  dispatch(deleteBlog(deleteId));
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
      <div className="content">
        {showSpinn && <Spinn/>}
        <div className="blogs-child">
          {allBlogs?.slice(0).reverse().map((el, key) => {
            return (
              <div className="blogs-card" key={el._id}>
                <img src={projectnull} alt="" />
                <div className="text-container">
                  <h2>{el.title}</h2>
                  <i className="date-created">{el.createdAt}</i>
                  <p>#{el.category}</p>
                  <p>{el.description.substring(1, 170)}...</p>
                  <div className="blog-btns-container">
                    {isDev && (
                      <div
                        onClick={() => {
                          setShowDelete(true);
                          setDeleteId(el._id);
                        }}
                      >
                        <MdDelete />
                      </div>
                    )}
                    <Link className="blog-link"
                      to="/blogs/blog"
                      onClick={() =>
                        dispatch({ type: "GETONEBLOG", payload: el })
                      }
                    >
                      <div className="blog-btn">
                        <p>Read more</p>
                      </div>
                    </Link>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
