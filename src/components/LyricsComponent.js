import React from 'react'
import '../styles/Lyrics.css'
const LyricsComponent = (props) => {
  return (
    <div className='LyricsBox'>
        {props.lyrics}
    </div>
  )
}

export default LyricsComponent