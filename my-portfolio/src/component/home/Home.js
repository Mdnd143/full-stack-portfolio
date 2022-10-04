import React, { useEffect, useState } from "react";
import "./Home.css";
import dp from "../../multimedia/images/favicon2.png";
import dp2 from "../../multimedia/images/dp.png";
import { FaCode, FaLink,FaDownload } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import Resume from "../../multimedia/doc/nadeem s.pdf";
import html from "../../multimedia/images/html-logo.png";
import css from "../../multimedia/images/css-logo.png";
import bootstrap from "../../multimedia/images/bootstrap.PNG";
import TypeScript from "../../multimedia/images/typescript.jpg";
import mongodb from "../../multimedia/images/mdb.png";
import express from "../../multimedia/images/express-js.png";
import Github from "../../multimedia/images/GitHub-logo.png";
import Nodejs from "../../multimedia/images/nodejs.png";
import react from "../../multimedia/images/reactlogo.png";
import noImage from "../../multimedia/images/no-image.PNG";
import projectnull from "../../multimedia/images/undraw_photograph_re_up3b.svg";
import js from "../../multimedia/images/js logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProject } from "../actions/projectActions";
import { getAllBlog } from "../actions/blogActions";
import Spinn from "../spinner/Spinn";
function Home() {
  let date = new Date()
  console.log('hhhuuu', date.getDate(), date.getFullYear())
  const dispatch = useDispatch();
  const [allProjects, setAllProjects] = useState([]);
  const [pSpinn, setPSpinn] = useState(false);
  const [bSpinn, setBSpinn] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const projects = useSelector((state) => state.projectReducer);
  const blogs = useSelector((state) => state.blogReducer);
  useEffect(() => {
    dispatch(getAllProject());
  }, []);
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
  useEffect(() => {
   if(projects ){
    if (projects.length > 0) {
      setAllProjects(projects.reverse().slice(projects.length-4, projects.length));
    } else if (projects.project && projects.project.length > 0) {
      setAllProjects(projects.project.reverse().slice(projects.project.length-5, projects.project.length-1));
    }}
    if(blogs){
    if (blogs.length > 0) {
      setAllBlogs(blogs.reverse().slice(0, 4));
    } else if ( blogs.blog && blogs.blog.length > 0) {
      setAllBlogs(blogs.blog.reverse().slice(0, 4));
    }}
    setPSpinn(allProjects.length>0?false:true)
    setBSpinn(allBlogs.length>0?false:true)
  }, [projects, blogs]);
  return (
    <div className="home-container">
      <div className="profile">
        <div className="photo">
          <img src={dp2} alt="uj" />
        </div>
        <div className="text">
          <span>Mohd Nadeem</span>
          <span>FullStack developer</span>
          <span className="resume-btn">
            <a href={Resume} download>
              <FaDownload/> Resume
            </a>
          </span>
        </div>
      </div>
      <div className="technologies">
        <h1>Technologies</h1>
        <div className="technology-child">
          <div className="technology-card">
            <img src={html} alt="hhd" />
            <h1>Html</h1>
            <p>More than intermediate</p>
          </div>
          <div className="technology-card">
            <img src={css} alt="hhd" />
            <h1>CSS</h1>
            <p>More than intermediate</p>
          </div>
          <div className="technology-card">
            <img src={js} alt="hhd" />
            <h1>Javascript</h1>
            <p>Intermediate</p>
          </div>
          <div className="technology-card">
            <img src={bootstrap} alt="hhd" />
            <h1>BootStrap</h1>
            <p>More than intermediate</p>
          </div>
          <div className="technology-card">
            <img src={react} alt="hhd" />
            <h1>ReactJs</h1>
            <p>More than intermediate</p>
          </div>
          <div className="technology-card">
            <img src={Nodejs} alt="hhd" />
            <h1>NodeJs</h1>
            <p>Intermediate</p>
          </div>
          <div className="technology-card">
            <img src={TypeScript} alt="hhd" />
            <h1>TypeScript</h1>
            <p>Intermediate.</p>
          </div>
          <div className="technology-card">
            <img src={express} alt="hhd" />
            <h1>ExpressJs</h1>
            <p>Intermediate</p>
          </div>
          <div className="technology-card">
            <img src={mongodb} alt="hhd" />
            <h1>MongoDb</h1>
            <p>Intermediate</p>
          </div>
          <div className="technology-card">
            <img
              src={Github}
              alt="hhd"
              style={{ backgroundColor: "#203a41" }}
            />
            <h1>Github</h1>
            <p>Intermediate</p>
          </div>
        </div>
      </div>
      <div className="project">
        <h1>Recent Projects</h1>
        {pSpinn && <Spinn/>}
        <div className="project-child">
          {allProjects?.slice(0).reverse().map((el) => {
            return (
              <div className="project-card" key={el._id}>
                <div className="text-container">
                  <h1>{el.title}</h1>
                  <p className="date-created">
                    <i>{el.createdAt}</i>
                  </p>
                  <p className="project-tag"><p>Technology used</p><span className="project-tech">{el.technology}</span></p>
                </div>
                <div className="project-btn-container">
                  <a href={el.sourceCode}>
                    <FaCode title="source code" />
                  </a>
                  <a href={el.liveLink}>
                    <FaLink title="live link" />
                  </a>
                </div>
              </div>
            );
          })}
          {!allProjects && <h2>No projects available</h2>}
        </div>
      </div>
      <div className="blogs">
        <h1>Recent Blogs</h1>
        {bSpinn && <Spinn/>}
        <div className="blogs-child">
          {allBlogs?.map((el) => {
            return (
              <div className="blogs-card" key={el._id}>
                <img src={projectnull} alt="" />
                <div className="text-container">
                  <h1>{el.title}</h1>
                  <i className="date-created">{el.createdAt}</i>
                  <p>#{el.category}</p>
                  <p>{el.description.substring(0, 150)}...</p>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
