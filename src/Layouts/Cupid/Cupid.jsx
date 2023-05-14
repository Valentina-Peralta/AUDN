import React, { useState, useEffect } from "react";
import "../Cupid/CupidStyle.css";
import { NavLink, useNavigate } from "react-router-dom";

function Cupid() {

  /*  const [animationValue, setAnimationValue] = useState(false);
   const [startAnimation1, setStartAnimation1] = useState("");
   const [startAnimation2, setStartAnimation2] = useState("");
   */

  const [cupid, setCupid] = useState()//variable para guardar el valor de cupid traido desde la db
  const [artists, setArtists] = useState([])
  const [likedArtists, setLikedArtists] = useState([]) //array de artistas para generar la playlist
  const [songs, setSongs] = useState([])
  const navigate = useNavigate()

  //consultar el valor de cupid(true or false)
  useEffect(
    () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "user_id": user_id
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'

      };

      fetch("http://localhost:3001/api/users/seeCupid", requestOptions)
        .then(response => response.json())
        .then(result => setCupid(result))
        .catch(error => console.log('error', error));

    }, [])

  //Traer todos los artistas
  const getArtists = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    await fetch("http://localhost:3001/api/artists", requestOptions)
      .then(response => response.json())
      .then(result => {
        setArtists(result)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getArtists()
  }, [])

  //array de ids de artistas
  const likedArtistsIds = likedArtists.map(artist => parseInt(artist.id));
  console.log(likedArtistsIds)
  console.log(likedArtists)

  //traer todas las canciones de artista por id

  const seeArtistSongs = (id) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/api/artists/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(songs)
        setSongs(songs => songs.concat(result))
        console.log(result)

      })
      .catch(error => console.log('error', error));
  }
  console.log(songs)


  function Like(id) {
    setArtists(artists => artists.filter(x => x.id !== id));

    setLikedArtists(likedArtists => likedArtists.concat(artists.find(x => x.id === id)));
    console.log(likedArtists)
    seeArtistSongs(id)
  }
  function Dislike(id) {
    setArtists(artists => artists.filter(x => x.id !== id))
  }

  //crearla playlist
  const [button, setButton] = useState('Crear playlist')
  const [playlistId, setPlaylistId] = useState()
  const user_id = localStorage.getItem('user_id')
  //array de ids de songs
  const songsIds = songs.map(song => parseInt(song.id));
  console.log(songsIds)
  const addPlaylist = () => {
    setButton('loading')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "Cupido Musical",
      user_id: user_id,
      songs_id: songsIds,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/playlists", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPlaylistId(result.playlist[0].id)
        // navigate(`/userPlaylist/${id}`);
        setButton('Ir a la playlist')

      })
      .catch((error) => console.log("error", error));

  };

  const seePlaylist = () => {
    navigate(`/userPlaylist/${playlistId}`);
  }

  /* 1) traer todos los artistas
  2)mapear el array para que se muestre el artista n y n+1
  3)que el botón verde aregue a un array 5 canciones del artista
  4)El botón de crear playlista cree una playlist con las canciones del array
  */

  /*  function prueba() {
     setAnimationValue(!animationValue);
     if (animationValue === true) {
       setStartAnimation1("animacionImg2");
     }
   }
 
   function Like() {
     const newArtist = artists.splice(0, 1)
     setArtists(newArtist)
 
 
     setAnimationValue(!animationValue);
     console.log(animationValue)
 
     if (animationValue === true) {
       setStartAnimation2("Like");
       prueba();
     }
   }
 
   function Dislike() {
     setAnimationValue(!animationValue);
     if (animationValue === true) {
       setStartAnimation2("Dislike");
       prueba();
     }
   }
  */



  return (
    artists.length > 0 ?
      (<div className="cupidContainer">
        <div className="cupidTitle">
          <NavLink to="/home">
            <img src="src\Img\position=left-1.svg" alt="backArrow" />
          </NavLink>
          <h3 className="musicalCupid">Cupido Musical</h3>
        </div>
        {/*  {cupid ? (<div className="modal">
          <div className="pop-up">
            <div className="pop-up-title">Cupido Musical</div>
          </div>
        </div>) : null}
 */}

        <div>    <div className="cupidImg animacionImg1">
          <img src={artists[0].image} alt="" />
        </div>

          <div className="cupidImg2 ">
            <img src={artists[1].image} alt="" />
          </div>
          <h2 className="artist-name">{artists[0].name}</h2>

        </div>




        <div className="matchBtns">
          <button className={button === 'loading' ? "big heart" : "heart"} onClick={() => Like(artists[0].id)}></button>
          <button className="cross" onClick={() => Dislike(artists[0].id)}></button>
        </div>

        <p className="matches">Matches actuales:</p>
        <div className="liked-artist-container">
          {likedArtists.length > 0 ? (
            likedArtists.map(artist => <div className="artist">
              <img src={artist.image} alt="" />
            </div>)
          ) : null}


        </div>
        {button === 'Crear playlist' ? <button
          onClick={addPlaylist}
          className={likedArtists.length > 4 ? 'enabled' : "disabled"}>Crear playlist</button>
          :
          null}
        {button === 'loading' ? <div className="loader"></div> : null}
        {button === 'Ir a la playlist' ?
          <button
            onClick={seePlaylist}
            className='enabled pulse'>{button}</button>
          : null}
      </div >) : null

  );

}

export default Cupid;
