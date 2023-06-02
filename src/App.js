import { useContext, useEffect, useState } from "react";
import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import MainMenu from "./components/MainMenu";
import Player from "./components/Player";
import MusicContext from "./context/Context";
import PauseContext from "./context/PauseContext";
import ActiveSongIndexContext from "./context/ActiveSongIndex";
import PrevMusicContext from "./context/PreviousMusic";

function App() {
  const [currentPlayingMusic, setcurrentPlayingMusic] = useState({});
  const [PauseMusic, setPauseMusic] = useState(true); // Music is paused initially and play button is displayed on all music
  const [activeSongIndex, setActiveSongIndex] = useState(-1);
  const [PrevMusic, setPrevMusic] = useState(false);
  // const [MycurrentSong,setMycurrentSong] = useState()

  // let currentMusic =  useContext(MusicContext)

  useEffect(() => {
    setActiveSongIndex(activeSongIndex);
  }, [activeSongIndex]);

  return (
    <MusicContext.Provider
      value={{ currentPlayingMusic, setcurrentPlayingMusic }}
    >
      <PauseContext.Provider value={{ PauseMusic, setPauseMusic }}>
        <ActiveSongIndexContext.Provider
          value={{ activeSongIndex, setActiveSongIndex }}
        >
          <PrevMusicContext.Provider value={{ PrevMusic, setPrevMusic }}>
            <div className="App">
              <LeftMenu />
              <div className="mainBox">
                <MainMenu />
                {activeSongIndex >= 0 ? <Player /> : <></>}
              </div>
            </div>
          </PrevMusicContext.Provider>
        </ActiveSongIndexContext.Provider>
      </PauseContext.Provider>
    </MusicContext.Provider>
  );
}

export default App;
