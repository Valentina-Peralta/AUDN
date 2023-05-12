import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Searcher.css'
import { NavLink } from 'react-router-dom'
function Searcher() {

    const user_id = localStorage.getItem('user_id')

    const [top20, setTop20] = useState([])
    useEffect(
        () => {
            const requestOptions = {
                method: 'POST',
                redirect: 'follow'
            };

            fetch(`http://localhost:3001/api/reproductions/top20/${user_id}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setTop20(result)
                })
                .catch(error => console.log('error', error));
        }
        , [])
    return (
        <div>
            <div className="top-gradient"></div>
            <p className='searcher-title'>Buscador</p>
            <NavLink to='/searcher2'>
                <input type="text" className='search-bar' placeholder='¿Qué deseas escuchar?' />
            </NavLink>
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
                    {top20.map(song => (<div className="top-song-container">
                        <div className="top-song-image" >
                            <img src={song.album_image} alt="" />
                        </div>
                        <p className='top-song-title'>{song.name}</p>
                        <p className='top-song-artist'>{song.album_name}</p>
                    </div>))}
                </div>

            </div>
            <NavBar />
        </div>
    )
}

export default Searcher