import React from "react";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import "../styles/LeftMenu.css";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>Spotify</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      </div>
  );
}

export { LeftMenu };
