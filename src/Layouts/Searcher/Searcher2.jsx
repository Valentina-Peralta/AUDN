import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Searcher.css'
import { NavLink } from 'react-router-dom'
function Searcher2() {
    const user_id = localStorage.getItem('user_id')

    const [searchTerm, setSearchTerm] = useState('');
    const [songs, setSongs] = useState([])


    const searchSongs = (e) => {
        setSearchTerm(e.target.value);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "searchTerm": searchTerm
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/songs/search", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (e.target.value === '') {
                    setSongs([]);
                } else {
                    setSongs(result);
                }
            })
            .catch(error => console.log('error', error));

    }

    return (
        <div>
            <div className="top-gradient"></div>

            <input
                value={searchTerm}
                onChange={searchSongs}
                type="text" className='search-bar-2' placeholder='¿Qué deseas escuchar?' />
            <NavLink to='/searcher'>
                <svg
                    className='back-arrow'
                    width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L17 8M8 1L1 8L8 15" stroke="#26262E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </NavLink>
            <div className="divider-container-2">
                <p className='busquedas recientes'>Búsquedas recientes</p>
                <svg
                    className='divider'
                    width="123" height="2" viewBox="0 0 123 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="123" y2="1" stroke="#E4E6E8" strokeWidth="2" />
                </svg>

            </div>
            <div className="searches-container">

                <div className="trend-grid">

                    {songs.length > 0 ? songs.map(song => {
                        return (<div

                            className="search-song-container">
                            <div className="search-song-image" >
                                <img src={song.album_image} alt="" />
                            </div>
                            <div className="search-song-text">
                                <p className='search-song-title'>{song.song_name}</p>
                                <p className='search-song-artist'>{song.album_name}</p>
                            </div>
                        </div>
                        )
                    }) : null}



                </div>

            </div>
            <NavBar />
        </div>
    )
}

export default Searcher2