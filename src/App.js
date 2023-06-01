import { useState } from 'react';
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import MainMenu from './components/MainMenu';
import Player from './components/Player';
import MusicContext from './context/Context';

function App() {
  const [currentPlayingMusic , setcurrentPlayingMusic] = useState({})
  return (
    <MusicContext.Provider value={{currentPlayingMusic,setcurrentPlayingMusic}}>
    <div className="App">
      <LeftMenu />
      <div className='mainBox'>
      <MainMenu />
      
      <Player />
      </div>
    </div>
    </MusicContext.Provider> 
  );
}

export default App;
