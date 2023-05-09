import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Playlist/PlaylistStyle.css"

function Playlist() {
    return (
        <div>
                    <div className='plContainer'>
                    <h5 className='generated'>Generada del Cupido Musical</h5>
            <div className='plTitle'>
                <NavLink to='/home'>
                    <img src="src\Img\position=left-1.svg" alt="backArrow" />
                </NavLink>
                
                <h1 className='pl'>Playlist Generadas</h1>
                <img src="src\Img\position=vertical.svg" alt="" />
            </div>
            <div className="plImg" >
                <div className='artist1Img'></div>
                <div className='artist2Img'></div>
                <div className='artist3Img' ></div>
                <div className='artist4Img' ></div>
            </div>
            <div className='plOptions'>
              <img src="src\Img\logo-small.svg" alt="" />
              <img src="src\Img\style=fill, state=inactive-5.svg" alt="" />
              <img src="src\Img\verified.svg" alt="" />
              <p>1h 53m</p>
              <img src="src\Img\state=active.svg" alt="" />
            </div>
            <div className='plOptions2'>
              <img src="src\Img\Vectorfolder.svg" alt="" />
              <p className='copy'>Crear Copia</p>
              <img src="src\Img\Vectorrandom.svg" alt="" />
              <img src="src\Img\Vectorplay.svg" alt="" />
            </div>
        </div>
        </div>
    )
}

export default Playlist