import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./Home.css";
import ProfilePhoto from "../assets/my-photo.png";
import MyLogo from "./MyLogo";

const Home = () => {
  const homejsx = (
    <div className="home">
      {/* <MyLogo></MyLogo> */}
      <div className="banner">
        <div className="left-tile">
          <div className="title first-name">Hello There...</div>
          <div className="title surname">
            I'm <span className="name">P Dinesh Kumar</span>
          </div>
          <div className=" title role-name">Front End Developer</div>
        </div>
        <div className="right-tile">
          <div className="user-photo">
            <img
              src={ProfilePhoto}
              alt="profile-pic"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <h4 className="bounce">
          Scroll Down <FaAngleDoubleDown />
        </h4>
      </div>
    </div>
  );
  return homejsx;
};
export default Home;
