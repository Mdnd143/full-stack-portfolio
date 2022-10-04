import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { BsEmojiHeartEyes, BsEmojiDizzy } from "react-icons/bs";
import projectnull from "../../multimedia/images/undraw_photograph_re_up3b.svg";
import { useSelector } from "react-redux";
export default function BlogSelected() {
  const [res, setRes] = useState("");
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date();
    let name = month[date.getUTCMonth()];
     let created = `${date.getDate()} ${name}, ${date.getFullYear()}`;
     console.log('hh', typeof(created), created)
  const [blogData, setBlogData] = useState({});
  const blog = useSelector((state) => state.selectedBlogReducer);

  useEffect(() => {
    setBlogData(blog);
  }, [blog]);
  return (
    <div className="selected-blog">
      <img src={projectnull} alt="" />
      <div className="selected-blog-text">
        <h1>{blogData.title}</h1>
        <i>{blogData.createdAt}</i>
        <p>#{blogData.category}</p>
        <p>{blogData.description}</p>
        <div className="blog-response">
          <span>Found helpful?</span>
          <div className="res-btns">
            <span className="res-btn-y" onClick={() => setRes("yes")}>
              <span>Yes</span>
              <BsEmojiHeartEyes />
            </span>
            <span className="res-btn-n" onClick={() => setRes("no")}>
              <span>No</span>
              <BsEmojiDizzy />
            </span>
          </div>
        </div>
        {res !== "" && (
          <span style={{ textAlign: "center" }}>
            {res === "yes"
              ? "Thank you so much for your positive feedback🥰. If you have any suggestion for me, you can share with me "
              : res === "no"
              ? "Your feedback is valuable for me😇. I'll try to improve the quality. If you have any suggestion for me to improve, you can share me "
              : ""}{" "}
            <Link to="/contact">Here</Link>
          </span>
        )}
      </div>
    </div>
  );
}
