import React from 'react'
import { NavLink } from 'react-router-dom'
import "../NewPlaylist/NewPlaylist.css"

function NewPlaylist() {
  return (
<div className='newPlContainer'>
  <div className='newPlTitle'>
    <NavLink to='/home'>
      <img src="src\Img\position=left-1.svg" alt="backArrow" />
    </NavLink>
                
    <h1 className='newPl'>Crear Playlist</h1>
  </div>
  <div className='plNameContainer'>
  <h1 className='plName'>¿Cómo se llamará tu playlist?</h1>
  </div>
  <label className='newPlInput' htmlFor="nombre_playlist">Nombre de la Playlist:</label>
  <input className='npi' type="text" />
  <button className='disabled'> Crear Playlist</button>
</div>
  )
}

export default NewPlaylist
