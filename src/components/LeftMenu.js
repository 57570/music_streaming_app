import React, { useEffect, useState } from "react";

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import "../styles/LeftMenu.css";
import songs from "../assets/Songs";

function LeftMenu() {
  const [search, setsearch] = useState("")
  useEffect(() => {
    let searchedSongs=songs.find((s)=>s.songName===search)
    console.log(searchedSongs)
  }, [search])
  
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
        <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      </div>
  );
}

export { LeftMenu };
