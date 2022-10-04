import React from "react";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./component/blog/Blog";
import Project from "./component/projects/Project";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import BlogSelected from "./component/blog/BlogSelected";
import Addnew from "./component/addnew/Addnew";
import UpdateNew from "./component/addnew/UpdateNew";
export default function App() {
  let addRoute = process.env.REACT_APP_ADD_ROUTE;
  let updateRoute = process.env.REACT_APP_UPDATE_ROUTE;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={`/${addRoute}`} element={<Addnew />} />
          <Route path={`/${updateRoute}`} element={<UpdateNew />} />
          <Route path="/blogs/blog" element={<BlogSelected />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
