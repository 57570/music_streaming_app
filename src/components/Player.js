import React, { useContext, useEffect, useState } from 'react'
import '../styles/Player.css'
import MusicContext from '../context/Context'

const Player = () => {  
    const [CurrentMusic, setCurrentMusic] = useState({})
    const music = useContext(MusicContext)
    useEffect(() => {
      setCurrentMusic(music)
      console.log(music)
    }, [MusicContext,music])
    
    return (
    <div className='playerBox'>
        <div className='wave'>
            <div className='wave1'></div>
            <div className='wave2'></div>
            <div className='wave3'></div>            
        </div>
        <div className='songDetails'>
            <img className='songImg' src={music.currentPlayingMusic.poster} />
            <div className='songTitle'>{music.currentPlayingMusic.songName}</div>
        </div>
    </div>
  )
}

export default Player