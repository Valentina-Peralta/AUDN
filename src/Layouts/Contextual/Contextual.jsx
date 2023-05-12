import React, { useEffect, useState } from "react";
import "../Contextual/ContextualStyle.css";
import { NavLink, useNavigate } from "react-router-dom";

function Contextual() {




  const [disabled, setDisabled] = useState(true); // Establecer la prop 'disabled' en 'true' por defecto
  const [contextualSongs, setContextualSongs] = useState([])

  useEffect(() => {
    const contextual = songs.filter((song) => {
      return (
        song.weather === weather &&
        song.mood === mood &&
        song.occasion === occasion &&
        (song.gender === genders[0] ||
          song.gender === genders[1] ||
          song.gender === genders[2])
      );
    });
    setContextualSongs(contextual);
  }, [occasion, mood, weather, genders]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/songs", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSongs(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const addPlaylist = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: "Música contextual",
      user_id: user_id,
      songs_id: songs_id,
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
        const id = result.playlist[0].id;
        console.log(id);
        navigate(`/userPlaylist/${id}`);
      })
      .catch((error) => console.log("error", error));
  };

  console.log(mood, occasion, weather)
  return (
    <div>
      <div className="contextualContainer">
        <div className="contextualTitle">
          <NavLink to="/home">
            <img src="src\Img\position=left-1.svg" alt="backArrow" />
          </NavLink>
          <h3 className="contextualMusic">Música Contextual</h3>
        </div>
        <div>
          <form className="options" action="">
            <label className="contextualLabel" htmlFor="ocasiones">
              ¿Cuál es la ocasión?
            </label>
            <select
              onChange={(e) => {
                setOccasion(e.target.value);
                if (mood === "" && weather === "" && occasion === "") {
                  setDisabled(true);
                } else {
                  setDisabled(false);
                }
              }}
              className="ctxSelect"
              name="ocasiones"
              id="ocasiones"
            >
              <option value="" disabled selected>
                Actividad
              </option>
              <option value="training">Ejercicio Físico</option>
              <option value="cleaning">Limpieza</option>
              <option value="celebrate">Celebración</option>
              <option value="sleep">Dormir</option>
              <option value="meditate">Meditar</option>
              <option value="social">Social</option>
              <option value="study">Estudiar</option>
              <option value="relax">Relajación</option>
              <option value="travel">Viajando</option>
            </select>
            <label className="contextualLabel" htmlFor="field">
              ¿Cómo te sientes?
            </label>
            <select
              onChange={(e) => {
                setMood(e.target.value);
                if (mood === "" && weather === "" && occasion === "") {
                  setDisabled(true);
                } else {
                  setDisabled(false);
                }
              }}
              className="ctxSelect"
              name="field"
              id="field"
            >
              <option value="" disabled selected>
                Estado de ánimo
              </option>
              <option value="happy">Feliz</option>
              <option value="sad">Triste</option>
              <option value="in love">Enamorado</option>
              <option value="relaxed">Relajado</option>
              <option value="anxious">Ansioso</option>
            </select>
            <label className="contextualLabel" htmlFor="wheater">
              ¿Cómo está el clima?
            </label>
            <select
              onChange={(e) => {
                setWeather(e.target.value);
                if (mood === "" && weather === "" && occasion === "") {
                  setDisabled(true);
                } else {
                  setDisabled(false);
                }
              }}
              className="ctxSelect"
              name="wheater"
              id="wheater"
            >
              <option value="" disabled selected>
                Clima
              </option>
              <option value="sunny">Soleado</option>
              <option value="rainy">Lluvioso</option>
              <option value="hot">Caluroso</option>
              <option value="cloudy">Nublado</option>
              <option value="cold">Frío</option>
              <option value="stormy">Tormentoso</option>
            </select>
          </form>
        </div>
        <h2 className="genderSelection">Selecciona hasta 3 géneros:</h2>

        <div className="styleContainer">
          <ul className="stylesList">

            {songsGenders.map(songGender =>
            (<li
              key={songGender.name}
              onClick={() => {
                songGender.selected === false ? songGender.selected = true : songGender.selected = false
                setGenders([...genders, songGender.name])

              }}
              className={songGender.selected ? 'darkStyle ' : "lightStyle"}>
              {songGender.name}
            </li>)

            )}
          </ul>
        </div>
        <button
          onClick={addPlaylist}
          disabled={disabled}
          className={disabled === true ? "disabled" : "disabled btn-standard"}
        >
          Crear Playlist
        </button>
      </div>
    </div>
  );
}

export default Contextual;
