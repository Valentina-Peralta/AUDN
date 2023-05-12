import React from 'react'

function EmptyUserPlaylist() {

    const user_img = localStorage.getItem('user_image')
    const user_name = localStorage.getItem('user_name')
    return (
        <div>

            <div className="top-gradient"></div>
            <div className="playlist-nav-bar">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L17 8M8 1L1 8L8 15" stroke="#26262E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Veranito</p>
                <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="#26262E" />
                    <path d="M4 10C4 11.1046 3.10457 12 2 12C0.895431 12 0 11.1046 0 10C0 8.89543 0.895431 8 2 8C3.10457 8 4 8.89543 4 10Z" fill="#26262E" />
                    <path d="M4 18C4 19.1046 3.10457 20 2 20C0.895431 20 0 19.1046 0 18C0 16.8954 0.895431 16 2 16C3.10457 16 4 16.8954 4 18Z" fill="#26262E" />
                </svg>

            </div>
            <div className="playlist-header">
                <p>Creada por:</p>

            </div>
            <div className="playlist-info">
                <img src={user_img} alt="" />
                <div>
                    <p className='user_name'>{user_name}</p>
                    <p className='date'>fecha hora</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyUserPlaylist