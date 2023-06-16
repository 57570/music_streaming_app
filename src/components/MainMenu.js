import React, { useContext } from 'react'
import TrendingSongs from './TrendingSongs'
import '../styles/MainContainer.css'
import songs from '../assets/Songs'
import LyricsContext from '../context/LyricsContext'
import MusicContext from '../context/Context'

const MainMenu = () => {
  const {Lyrics,setLyrics} = useContext(LyricsContext)
  const { currentPlayingMusic, setcurrentPlayingMusic } =
    useContext(MusicContext);
  return (
    <div className='maincontainer'>
      <TrendingSongs />
    </div>
  )
}

export default MainMenu