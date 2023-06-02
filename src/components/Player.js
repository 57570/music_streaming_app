import React, { useContext, useEffect, useState } from "react";
import "../styles/Player.css";
import MusicContext from "../context/Context";
import { BiSkipPreviousCircle, BiSkipNextCircle } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import songs from "../assets/Songs";
import PauseContext from "../context/PauseContext";
import ActiveSongIndexContext from "../context/ActiveSongIndex";
import PrevMusicContext from "../context/PreviousMusic";


const Player = () => {
  // let progress = 1;
  const [progress,setProgress] = useState(0)
  const [startingSongTimeInSecond, setStartingSongTimeInSecond] = useState(0);
  const [startingTimeInMinute, setStartingTimeInMinute] = useState(0);
  const { PrevMusic, setPrevMusic } = useContext(PrevMusicContext)
  // const [CurrentMusic, setCurrentMusic] = useState({});
  // const [isPause, setisPause] = useState();
  // const [currentIndex, setCurrentIndex] = useState();

  // const music = useContext(MusicContext);
  // const pause = useContext(PauseContext);
  // const index = useContext(ActiveSongIndexContext);

  const { currentPlayingMusic, setcurrentPlayingMusic } =
    useContext(MusicContext); // Current playing music object
  const { PauseMusic, setPauseMusic } = useContext(PauseContext); // whether music is playing or not
  const { activeSongIndex, setActiveSongIndex } = useContext(
    ActiveSongIndexContext
  ); // Active song index


  // useEffect(() => {
  //   setcurrentPlayingMusic((prevMusic)=>{
  //     if(prevMusic.id === activeSongIndex )
  //     {
  //       setStartingSongTimeInSecond(0)
  //       setStartingTimeInMinute(0)
  //     }
  //   })
  // }, [currentPlayingMusic])
  useEffect(() => {
    // console.log("PrevMusic in Player")

    // console.log(PrevMusic)
      setStartingSongTimeInSecond(0)
      setStartingTimeInMinute(0)
  }, [PrevMusic])
  

  useEffect(() => {
   
    let timer;
    if (!PauseMusic && activeSongIndex !== null) {
      timer = setInterval(() => {
        setStartingSongTimeInSecond((prevSecond) => {
          if (prevSecond === 59) {
            setStartingTimeInMinute((prevMinute) => prevMinute + 1);
             setProgress(progress+1)
             console.log(progress)
            return 0;
          }
          else{
          setProgress(progress+1)
          console.log(progress)
          return prevSecond+1;}
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeSongIndex,progress]);

  const handlePlay = (e, song) => {
    e.preventDefault();
    
    setPauseMusic(false);
    setActiveSongIndex(song.id);
    setcurrentPlayingMusic(song);
    song.Song.play();
    if (startingSongTimeInSecond === 0) {
      setStartingSongTimeInSecond(0);
      setStartingTimeInMinute(0);
    }
    // setSeconds(0)
  };

  const handlePause = (e, song) => {
    e.preventDefault();
    setActiveSongIndex(null);
    setPauseMusic(true);
    song.Song.pause();
  };

  // useEffect(() => {
  //   setcurrentPlayingMusic(music);
  //   setPauseMusic(pause.PauseMusic);
  //   setActiveSongIndex(index);
  //   // console.log(music);

  //   // console.log(isPause);
  // }, [MusicContext, PauseContext, ActiveSongIndexContext]);

  return (
    <div className="playerBox">
      {currentPlayingMusic.id >= 0 && PauseMusic == false ? (
        <div className="wave">
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
        </div>
      ) : (
        <></>
      )}
      <div className="songDetails">
        <img className="songImg" src={currentPlayingMusic.poster} />
        <div className="songTitle">{currentPlayingMusic.songName}</div>
        <i className="previous">
          <BiSkipPreviousCircle />
        </i>
        {currentPlayingMusic.id >= 0 && PauseMusic == false ? (
          <i
            onClick={(e) => handlePause(e,currentPlayingMusic)}
            className="play"
          >
            <AiFillPauseCircle />
          </i>
        ) : (
          <i
            onClick={(e) => handlePlay(e, currentPlayingMusic)}
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
        {/* <input className="seekBar" type="range" min={0} max={100} /> */}
        <div className="SeekBar" style={{width:`${progress}px`,height:'5px',backgroundColor:'white'}}></div>
        <span className="startingTime">
          {currentPlayingMusic.duration}
        </span>
      </div>
    </div>
  );
};

export default Player;
