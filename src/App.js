import { useContext, useEffect, useState } from "react";
import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import MainMenu from "./components/MainMenu";
import Player from "./components/Player";
import MusicContext from "./context/Context";
import PauseContext from "./context/PauseContext";
import ActiveSongIndexContext from "./context/ActiveSongIndex";
import PrevMusicContext from "./context/PreviousMusic";
import ProgressBarContext from "./context/ProgressBar";
import LyricsContext from "./context/LyricsContext";
import LyricsComponent from "./components/LyricsComponent";


function App() {
  const [currentPlayingMusic, setcurrentPlayingMusic] = useState({});
  const [PauseMusic, setPauseMusic] = useState(true); // Music is paused initially and play button is displayed on all music
  const [activeSongIndex, setActiveSongIndex] = useState(-1);
  const [PrevMusic, setPrevMusic] = useState(false);
  const [progress,setProgress] = useState(0)
  const [Lyrics,setLyrics] = useState(false)
  // const [MycurrentSong,setMycurrentSong] = useState()

  // let currentMusic =  useContext(MusicContext)

  useEffect(() => {
    setActiveSongIndex(activeSongIndex);
  }, [activeSongIndex]);

  return (
    <LyricsContext.Provider value={{Lyrics,setLyrics}}>
    <MusicContext.Provider
      value={{ currentPlayingMusic, setcurrentPlayingMusic }}
    >
      <PauseContext.Provider value={{ PauseMusic, setPauseMusic }}>
        <ActiveSongIndexContext.Provider
          value={{ activeSongIndex, setActiveSongIndex }}
        >
          <PrevMusicContext.Provider value={{ PrevMusic, setPrevMusic }}>
            <ProgressBarContext.Provider value={{progress,setProgress}}>
            <div className="App">
              <LeftMenu />
              <div className="mainBox">
                <MainMenu />
                {activeSongIndex >= 0 ? <Player /> : <></>}
              </div>
            </div>
            </ProgressBarContext.Provider>
          </PrevMusicContext.Provider>
        </ActiveSongIndexContext.Provider>
      </PauseContext.Provider>
    </MusicContext.Provider>
    </LyricsContext.Provider>
  );
}

export default App;
