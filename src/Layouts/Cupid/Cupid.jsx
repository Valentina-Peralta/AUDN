import React from 'react'
import "../Cupid/CupidStyle.css"
import { NavLink } from 'react-router-dom'



function Cupid() {
    return (
        <div className='cupidContainer'>
            <div className='cupidTitle'>
                <NavLink to='/home'>
                    <img src="src\Img\position=left-1.svg" alt="backArrow" />
                </NavLink>
                <h3 className='musicalCupid'>Cupido Musical</h3>
            </div>
            <div className="cupidImg" >
                <img src="" alt="" />
            </div>
            <div className='cupidImg2'>hola</div>
            <div className='matchBtns'>
                <button className='heart'></button>
                <button className='cross'></button>
            </div>
            <h2 className='artistName'>Cantante</h2>
            <button className='disabled'> Crear Playlist</button>
        </div>
    )
}

export default Cupid