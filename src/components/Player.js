import React, { useContext, useEffect, useState } from "react";
import "../styles/Player.css";
import MusicContext from "../context/Context";
import { BiSkipPreviousCircle, BiSkipNextCircle } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import songs from "../assets/Songs";
import PauseContext from "../context/PauseContext";
import ActiveSongIndexContext from "../context/ActiveSongIndex";

const Player = () => {
  const [startingSongTimeInSecond, setStartingSongTimeInSecond] = useState(0);
  const [startingTimeInMinute, setStartingTimeInMinute] = useState(0);
  const [afterPauseTime, setafterPauseTime] = useState(0);

  const [CurrentMusic, setCurrentMusic] = useState({});
  const [isPause, setisPause] = useState();
  const [currentIndex, setCurrentIndex] = useState();

  const music = useContext(MusicContext);
  const pause = useContext(PauseContext);
  const index = useContext(ActiveSongIndexContext);

  useEffect(() => {
    let timer;
    // if(CurrentMusic && isPause !== true)
    // {
    //     setStartingSongTimeInSecond(0)
    //     setStartingTimeInMinute(0)
    // }
    if (!isPause && currentIndex !== null) {
      timer = setInterval(() => {
        setStartingSongTimeInSecond((prevSecond) => {
          if (prevSecond === 59) {
            setStartingTimeInMinute((prevMinute) => prevMinute + 1);
            return 0;
          }
          return prevSecond + 1;
        });
      }, 1000);
    }

    return () => {
        clearInterval(timer);

    };
  }, [isPause, currentIndex]);
  
  const handlePlay = (e, song) => {
    e.preventDefault();
    setisPause(false);  
    setCurrentIndex(song.id);
    setCurrentMusic(song);
    song.Song.play();
    if (startingSongTimeInSecond === 0) {
      setStartingSongTimeInSecond(0);
      setStartingTimeInMinute(0);
    }
    // setSeconds(0)
  };

  const handlePause = (e, song) => {
    e.preventDefault();
    setCurrentIndex(null);
    setisPause(true);
    song.Song.pause();
  };

  useEffect(() => {
    setCurrentMusic(music);
    setisPause(pause.PauseMusic);
    setCurrentIndex(index);
    console.log(music);

    console.log(isPause);
  }, [MusicContext, music, PauseContext, ActiveSongIndexContext]);

  return (
    <div className="playerBox">
      {music.currentPlayingMusic.id >= 0 && isPause == false ? (
        <div className="wave">
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
        </div>
      ) : (
        <></>
      )}
      <div className="songDetails">
        <img className="songImg" src={music.currentPlayingMusic.poster} />
        <div className="songTitle">{music.currentPlayingMusic.songName}</div>
        <i className="previous">
          <BiSkipPreviousCircle />
        </i>
        {music.currentPlayingMusic.id >= 0 && isPause == false ? (
          <i
            onClick={(e) => handlePause(e, music.currentPlayingMusic)}
            className="play"
          >
            <AiFillPauseCircle />
          </i>
        ) : (
          <i
            onClick={(e) => handlePlay(e, music.currentPlayingMusic)}
            className="play"
          >
            <AiFillPlayCircle />
          </i>
        )}
        <i className="play">
          <BiSkipNextCircle />
        </i>
        <span className="startingTime">
          {" "}
          {startingTimeInMinute}:
          {startingSongTimeInSecond.toString().padStart(2, "0")}
        </span>
        <input className="seekBar" type="range" min={0} max={100} />
        <span className="startingTime">
          {music.currentPlayingMusic.duration}
        </span>
      </div>
    </div>
  );
};

export default Player;
