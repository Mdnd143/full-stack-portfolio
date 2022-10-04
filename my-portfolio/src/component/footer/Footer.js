import React from "react";
import "./Footer.css";
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="footer-container">
      <h2>made with ❤️ by Nadeem</h2>
      <ul className="footer-child">
        <li>
          <a href="https://github.com/Mdnd143">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohd-nadeem-145250220">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_nadeem24_/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mohd7210357259">
            <BsTwitter />
          </a>
        </li>
      </ul>
      <p>© 2022 Mohd Nadeem Portfolio</p>
    </div>
  );
}
