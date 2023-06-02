import React, { useContext, useEffect, useState } from "react";
// import Loader from "./Loader";
import axios from "axios";
import { FaPlay, FaPause } from "react-icons/fa";
import songs from "../assets/Songs";
import MainMenu from "./MainMenu";
import MusicContext from "../context/Context";
import PauseContext from "../context/PauseContext";
import ActiveSongIndexContext from "../context/ActiveSongIndex";
import PrevMusicContext from "../context/PreviousMusic";


const TrendingSongs = () => {
  const [songData, setSongData] = useState(null);
  const [isPause, setisPause] = useState()
  // const [prevMusic,setPrevMusic] = useState()
  const {currentPlayingMusic,setcurrentPlayingMusic} = useContext(MusicContext) // Current playing music object
  const {PauseMusic,setPauseMusic} = useContext(PauseContext) // whether music is playing or not 
  const {activeSongIndex, setActiveSongIndex} = useContext(ActiveSongIndexContext) // Active song index
  const { PrevMusic, setPrevMusic } = useContext(PrevMusicContext)

  const pause = useContext(PauseContext)

  useEffect(() => {
    setisPause(pause.PauseMusic)
    console.log("In trending songs")
    console.log(activeSongIndex)
  }, [PauseContext,activeSongIndex])
  
  



  const handlePlay = (e, song) => {
    e.preventDefault();

    if (activeSongIndex !== -1) {
        const activeSong = songs.find((s) => s.id === activeSongIndex);
        if (activeSong) {
          activeSong.Song.pause();
        }
      }
    setActiveSongIndex(song.id);
    // setSongData(song);
    setPrevMusic(!PrevMusic)
    setcurrentPlayingMusic(song) 
    song.Song.play();
    setPauseMusic(false) // Song is playing and pause button is displayed 
  };

  const handlePause = (e, song) => {
    e.preventDefault();
    setActiveSongIndex(null);
    setPauseMusic(true) // Song is paused and play button is displayed
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
                {activeSongIndex === song.id && isPause === false ? (
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