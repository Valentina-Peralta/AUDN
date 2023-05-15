import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AddSongs() {
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()
    const [songs, setSongs] = useState([])
    const plName = useParams().name
    const playlist_id = localStorage.getItem('last-playlist-id')
    const sorter = [

        { 'name': 'Sugerencias', 'selected': true },
        { 'name': 'Recientes', 'selected': false },
        { 'name': 'rock', 'selected': false },
        { 'name': 'country', 'selected': false },
        { 'name': 'soul', 'selected': false },
        { 'name': 'jazz', 'selected': false },
        { 'name': 'blues', 'selected': false },
        { 'name': 'hip-hop', 'selected': false },
        { 'name': 'pop', 'selected': false },
        { 'name': 'reggae', 'selected': false },
        { 'name': 'folk', 'selected': false },
        { 'name': 'r&b', 'selected': false },
        { 'name': 'classical', 'selected': false },
        { 'name': 'ambient', 'selected': false },
        { 'name': 'edm', 'selected': false },
        { 'name': 'electronic', 'selected': false },
        { 'name': 'disco', 'selected': false },
        { 'name': 'new age', 'selected': false },
        { 'name': 'punk', 'selected': false },
        { 'name': 'heavy metal', 'selected': false }

    ]
    const [top20Global, setTop20Global] = useState([])
    const [songs_id, setSongs_id] = useState([])
    console.log(playlist_id)
    const [playlistReady, setPlaylistReady] = useState(false)

    useEffect(
        () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`http://localhost:3001/api/reproductions/top20/global`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setTop20Global(result)
                })
                .catch(error => console.log('error', error));
        }
        , [])

    const searchSongs = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "searchTerm": filter
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

                setSongs(result);

            })
            .catch(error => console.log('error', error));

    }

    const handleInput = (e) => {
        setFilter(e.target.value)
        console.log(songs)
    }
    useEffect(() => searchSongs()
        , [filter])

    const addSongs = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "playlist_id": parseInt(playlist_id),
            "songs_id": songs_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/playlists/addSongs", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
        setPlaylistReady(true)

    }
    const addSongId = (id) => {
        setSongs_id([...songs_id, parseInt(id)])
        console.log(songs_id)
        const updatedTop20Global = [...top20Global];
        const songIndex = updatedTop20Global.findIndex(song => song.id === id);
        if (songIndex >= 0) {
            updatedTop20Global.splice(songIndex, 1);
        }
        setTop20Global(updatedTop20Global);

    }


    return (
        <div className='add-songs'>
            <div className="top-gradient"></div>
            <div className="top-nav-bar">
                <svg
/*                     onClick={navigate(-1)}
 */                    width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L17 8M8 1L1 8L8 15" stroke="#26262E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div className="text-container">
                    <p className='add-songs'>Añadir canciones:</p>
                    <p className='pl-name'>{plName}</p></div>
                <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="#26262E" />
                    <path d="M4 10C4 11.1046 3.10457 12 2 12C0.895431 12 0 11.1046 0 10C0 8.89543 0.895431 8 2 8C3.10457 8 4 8.89543 4 10Z" fill="#26262E" />
                    <path d="M4 18C4 19.1046 3.10457 20 2 20C0.895431 20 0 19.1046 0 18C0 16.8954 0.895431 16 2 16C3.10457 16 4 16.8954 4 18Z" fill="#26262E" />
                </svg>
                <input
                    value={filter}
                    onChange={(e) =>
                        handleInput(e)}
                    className='search-songs'
                    type="text" name=""
                    placeholder='Buscar' />
                <svg className='search-icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7417 20.7417L16.0806 16.0723M16.0806 16.0723C17.7343 14.4164 18.6637 12.1722 18.6637 9.83183M16.0806 16.0723L16.0787 16.0746M18.6637 9.83183C18.6637 7.48948 17.7332 5.24307 16.0769 3.58678C14.4206 1.93049 12.1742 1 9.83183 1C7.48948 1 5.24307 1.93049 3.58678 3.58678C1.93049 5.24307 1 7.48948 1 9.83183C1 12.1742 1.93049 14.4206 3.58678 16.0769C5.24307 17.7332 7.48948 18.6637 9.83183 18.6637C12.1742 18.6637 14.4206 17.7332 16.0769 16.0769L16.0787 16.0746M18.6637 9.83183C18.6637 12.1732 17.7337 14.4185 16.0787 16.0746" stroke="#BFC0C1" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg className='voice-icon' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 10.6C17 12.5803 16.1571 14.4795 14.6569 15.8797C13.1566 17.28 11.1217 18.0667 9 18.0667M9 18.0667C6.87827 18.0667 4.84344 17.28 3.34315 15.8797C1.84285 14.4795 1 12.5803 1 10.6M9 18.0667V22.3333M9 22.3333H4.42857M9 22.3333H13.5714M9 13.8C8.09069 13.8 7.21862 13.4629 6.57563 12.8627C5.93265 12.2626 5.57143 11.4487 5.57143 10.6V4.2C5.57143 3.35131 5.93265 2.53737 6.57563 1.93726C7.21862 1.33714 8.09069 1 9 1C9.90931 1 10.7814 1.33714 11.4244 1.93726C12.0673 2.53737 12.4286 3.35131 12.4286 4.2V10.6C12.4286 11.4487 12.0673 12.2626 11.4244 12.8627C10.7814 13.4629 9.90931 13.8 9 13.8V13.8Z" stroke="#BFC0C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="sorter-container">
                {filter === '' ? sorter.map(label => (<div className={label.selected ? 'sort-label selected' : 'sort-label'}>
                    {label.name}
                </div>)) : null}
            </div>
            <div className="result-container">

                {filter === '' ? top20Global.map(song => (<div className="result-song">
                    <img src={song.album_image} alt="" />
                    <div className="result-song-text">
                        <p className='title'>{song.name}</p>
                        <p className='result-artist'>{song.artist_name}</p>
                    </div>
                    <svg
                        onClick={() => addSongId(song.id)}
                        className='add-song'
                        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12.3137V1M12.6569 6.65685H1.34315" stroke="#26262E" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>))
                    : songs.map(song => (<div className="result-song">
                        <img src={song.album_image} alt="" />
                        <div className="result-song-text">
                            <p className='title'>{song.song_name}</p>
                            <p className='result-artist'>{song.artist_name}</p>
                        </div>
                        <svg
                            onClick={() => addSongId(song.id)}
                            className='add-song'
                            width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12.3137V1M12.6569 6.65685H1.34315" stroke="#26262E" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>))}
            </div>
            <div className="ver-playlist">
                {playlistReady ? <button
                    onClick={navigate(`/userplaylist/${playlist_id}`)}
                    className='enabled pulse'>Ver playlist</button> :
                    <button
                        onClick={
                            addSongs
                        }
                        className='enabled'>¡Listo!</button>
                }
            </div>
        </div>
    )
}

export default AddSongs