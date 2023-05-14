import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../NewPlaylist/NewPlaylist.css"

function NewPlaylist() {
  const navigate = useNavigate()
  const user_id = localStorage.getItem('user_id')

  const [plName, setPlName] = useState('')


  const addEmptyPlaylist = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": plName,
      "user_id": user_id,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/playlistsEmpty", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const id = result.playlist[0].id
        console.log(id)
        localStorage.setItem('last-playlist-id', id)
        navigate(`/emptyuserplaylist/${plName}`)
        //que lleve a otro layout '/userEmptyPlaylist'
      })
      .catch(error => console.log('error', error));
  }


  return (
    <div className='newPlContainer'>
      <div className='newPlTitle'>
        <NavLink to='/profile'>
          <img src="src\Img\position=left-1.svg" alt="backArrow" />
        </NavLink>

        <h1 className='newPl'>Crear Playlist</h1>
      </div>
      <div className='plNameContainer'>
        <h1 className='plName'>¿Cómo se llamará tu playlist?</h1>
      </div>
      <label className='newPlInput' htmlFor="nombre_playlist">Nombre de la Playlist:</label>
      <input className='npi' type="text"
        onChange={(e) => setPlName(e.target.value)}
      />
      <button
        onClick={addEmptyPlaylist}

        className={plName === '' ? 'disabled' : 'enabled pulse'}>
        Crear Playlist</button>
    </div>
  )
}

export default NewPlaylist
