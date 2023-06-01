import React, { useContext, useEffect, useState } from "react";
// import Loader from "./Loader";
import axios from "axios";
import { FaPlay, FaPause } from "react-icons/fa";
import songs from "../assets/Songs";
import MainMenu from "./MainMenu";
import MusicContext from "../context/Context";


const TrendingSongs = () => {
  const [songData, setSongData] = useState(null);
  const [activeSongIndex, setActiveSongIndex] = useState();
  const {currentPlayingMusic,setcurrentPlayingMusic} = useContext(MusicContext)

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
    setcurrentPlayingMusic(song)
    song.Song.play();
  };

  useEffect(() => {
    console.log("Displaying current playing song")
    console.log(currentPlayingMusic)
  }, [activeSongIndex]);

  const handlePause = (e, song) => {
    e.preventDefault();
    setActiveSongIndex(null);
    song.Song.pause();
  };

  return (
    <div className="trendingMusic">
      <h1 className="trendingSongs">Trending Songs</h1>
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
              <h1 className="songTitle">{song.songName}</h1>
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