import React, { useEffect, useState } from "react";
// import Loader from "./Loader";
import axios from "axios";
import { FaPlay, FaPause } from "react-icons/fa";
import songs from "../assets/Songs";
import MainMenu from "./MainMenu";
const TrendingSongs = () => {
  const [songData, setSongData] = useState(null);
  const [activeSongIndex, setActiveSongIndex] = useState();
  const handlePlay = (e, song) => {
    e.preventDefault();
    if (activeSongIndex !== undefined) {
        const activeSong = songs.find((s) => s.id === activeSongIndex);
        if (activeSong) {
          activeSong.Song.pause();
        }
      }
    
    setActiveSongIndex(song.id);
    setSongData(song);
    song.Song.play();
  };

  useEffect(() => {
    console.log(activeSongIndex);
    console.log(songData);
    activeSongIndex == -1 && songData.Song.pause();
  }, [activeSongIndex]);

  const handlePause = (e, song) => {
    e.preventDefault();
    setActiveSongIndex(null);
    song.Song.pause();
  };

  return (
    <div className="trendingMusic">
      <div className="SongContainer">
        {songs ? (
          songs?.map((song) => (
            <div className="songBox">
              <img className="songImg" src={song.poster} />
              <div className="playBtn">
                {activeSongIndex === song.id ? (
                  <i onClick={(e) => handlePause(e, song)}>
                    <FaPause />
                  </i>
                ) : (
                  <i onClick={(e) => handlePlay(e, song)}>
                    <FaPlay />
                  </i>
                )}
              </div>
              <h5 className="songTitle">{song.songName}</h5>
              <div className="artistName">
                <span className="ArtistName">{song.Artist}</span>
              </div>
            </div>
          ))
        ) : (
            <></>
        )}
      </div>
    </div>
  );
};

export default TrendingSongs