import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Searcher.css'
function Searcher() {
    return (
        <div>
            <div className="top-gradient"></div>
            <p className='searcher-title'>Buscador</p>

            <input type="text" className='search-bar' placeholder='¿Qué deseas escuchar?' />
            <svg
                className='search-vector'
                width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7417 20.7417L16.0806 16.0723M16.0806 16.0723C17.7343 14.4164 18.6637 12.1722 18.6637 9.83183M16.0806 16.0723L16.0787 16.0746M18.6637 9.83183C18.6637 7.48948 17.7332 5.24307 16.0769 3.58678C14.4206 1.93049 12.1742 1 9.83183 1C7.48948 1 5.24307 1.93049 3.58678 3.58678C1.93049 5.24307 1 7.48948 1 9.83183C1 12.1742 1.93049 14.4206 3.58678 16.0769C5.24307 17.7332 7.48948 18.6637 9.83183 18.6637C12.1742 18.6637 14.4206 17.7332 16.0769 16.0769L16.0787 16.0746M18.6637 9.83183C18.6637 12.1732 17.7337 14.4185 16.0787 16.0746" stroke="#BFC0C1" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="divider-container">
                <p className='top-20s'>Top 20s</p>
                <svg
                    className='divider'
                    width="240" height="2" viewBox="0 0 240 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="240" y2="1" stroke="#E4E6E8" strokeWidth="2" />
                </svg>
            </div>
            <div className="trending-grid-mundial">
                <div className="trend-grid">
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                    <div className="song-container">
                        <div className="song-image" />
                        <p className='song-title'>Demon Fire</p>
                        <p className='song-artist'>AC/DC</p>
                    </div>
                </div>

            </div>
            <NavBar />
        </div>
    )
}

export default Searcher