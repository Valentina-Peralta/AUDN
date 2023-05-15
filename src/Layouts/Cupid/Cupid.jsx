import React, { useState, useEffect } from "react";
import "../Cupid/CupidStyle.css";
import { NavLink } from "react-router-dom";

function Cupid() {
  const [animationValue, setAnimationValue] = useState(false);
  const [startAnimation1, setStartAnimation1] = useState("");
  const [startAnimation2, setStartAnimation2] = useState("");
  const [artists, setArtists] = useState([])
  const [likeArtists, setLikeArtists] = useState([]) //array de artistas para generar la playlist

  //array de ids de artistas
  const likeArtistsIds = likeArtists.map(artist => parseInt(artist.id));
  console.log(likeArtistsIds)


  //traer todas las canciones de artista por id

  const [songs, setSongs] = useState([])


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

  /*   likeArtistsIds.forEach(id => {
      seeArtistSongs(id)
    })
   */
  /*   seeArtistSongs(2)
   */
  function Like(id) {
    setArtists(artists => artists.filter(x => x.id !== id));

    setLikeArtists(likeArtists => likeArtists.concat(artists.find(x => x.id === id)));
    console.log(likeArtists)
    seeArtistSongs(id)
  }
  function Dislike(id) {
    setArtists(artists => artists.filter(x => x.id !== id))

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



  return (


    artists.length > 0 ?
      (<div className="cupidContainer">
        <div className="cupidTitle">
          <NavLink to="/home">
            <img src="src\Img\position=left-1.svg" alt="backArrow" />
          </NavLink>
          <h3 className="musicalCupid">Cupido Musical</h3>
        </div>


        <div>    <div className="cupidImg animacionImg1">
          <img src={artists[0].image} alt="" />
        </div>
          <div className="cupidImg2 ">
            <img src={artists[1].image} alt="" />
          </div>
          <h2 className="artistName">{artists[0].name}</h2>

        </div>




        <div className="matchBtns">
          <button className="heart" onClick={() => Like(artists[0].id)}></button>
          <button className="cross" onClick={() => Dislike(artists[0].id)}></button>
        </div>
        <button className="disabled">Crear Playlist</button>
      </div>
      ) : null

  );
}

export default Cupid;
// aerosmith guns
//  1      2       3