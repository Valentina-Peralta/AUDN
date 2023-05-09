import React from 'react'

function Playlist() {
    return (
        <div>
                    <div className='plContainer'>
            <div className='plTitle'>
                <NavLink to='/home'>
                    <img src="src\Img\position=left-1.svg" alt="backArrow" />
                </NavLink>
                <h5>Generada del Cupido Musical</h5>
                <h3 className='pl'>Playlist Generadas</h3>
                <img src="src\Img\position=vertical.svg" alt="" />

            </div>
        </div>
        </div>
    )
}

export default Playlist