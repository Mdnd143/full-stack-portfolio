import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { GoX } from "react-icons/go";
import profileLogo from "../../multimedia/images/profile-logo.png";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const [toMobile, setToMobile] = useState(false);
  const [pass, setPass] = useState("");
  const [secKey, setSecKey] = useState("");
  const [warn, setWarn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [devMode, setdevMode] = useState(false);
  const [modaal, setModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setSecKey(process.env.REACT_APP_SECURITY_KEY);
  }, []);
  const handleClick = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.style.setProperty("--light-theme", "#022c37");
      document.documentElement.style.setProperty("--text-color", "white");
    } else if (darkMode) {
      document.documentElement.style.setProperty("--light-theme", "white");
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(35, 34, 34)"
      );
    }
  };
  const modal = document.getElementById("myModal");
  window.onclick = function (event) {
    if (event.target.id == "myModal") {
      setModal(false);
      setWarn(false);
    }
  };
  const verifyPass = () => {
    if (pass === process.env.REACT_APP_SECURITY_KEY) {
      setdevMode(true);
      setWarn(false);
      document.documentElement.style.setProperty("--display", "none");
      document.documentElement.style.setProperty("--position", 28 + "px");
      setModal(false);
      setToMobile(false);
      dispatch({ type: "ENABLEDEVMODE" });
      navigate('/add')
    } else {
      setWarn(true);
    }
    setPass("");
  };
  const handledevmode = () => {
    if (devMode) {
      setModal(false);
      setdevMode(false);
      dispatch({ type: "DISABLEDEVMODE" });
      document.documentElement.style.setProperty("--position", "0");
      navigate('/')
    } else {
      setModal(true);
    }
  };
  return (
    <div className="navbar-container">
      <div className="brand">
        <img src={profileLogo} alt="" />
      </div>
      <ul className={!toMobile ? "child" : "child-mobile"}>
        <li className="link" onClick={() => setToMobile(false)}>
          <Link to="/">Home</Link>
        </li>
        {devMode && (
          <li className="link" onClick={() => setToMobile(false)}>
            <Link to={`/${process.env.REACT_APP_ADD_ROUTE}`}>AddNew</Link>
          </li>
        )}
        <li className="link" onClick={() => setToMobile(false)}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="link" onClick={() => setToMobile(false)}>
          <Link to="/blogs">Blog</Link>
        </li>
        {modaal && (
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={verifyPass}>
                verify
              </span>
              <p>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="enter 10 digit security"
                />
                {warn && (
                  <p style={{ color: "red" }}>incorrect security code</p>
                )}
              </p>
            </div>
          </div>
        )}
        {!devMode && (
          <li className="link" onClick={() => setToMobile(false)}>
            <Link to="/contact">sayHello</Link>
          </li>
        )}
        <li className="link" onClick={() => setToMobile(false)}>
          <div className="toggle" onClick={handleClick}>
            <BsMoonStars />
            <BsSun />
            <div
              className="t-button"
              style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></div>
          </div>
        </li>
        <li className="devmode-btn">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={handledevmode}></span>
          </label>{" "}
          <span>{devMode ? "DevMode" : "GuestMode"}</span>
        </li>
      </ul>
      <div className="to-mobile" onClick={() => setToMobile(!toMobile)}>
        {toMobile ? <GoX /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
}
