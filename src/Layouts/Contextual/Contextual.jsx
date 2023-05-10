import React, { useEffect, useState } from "react";
import "../Contextual/ContextualStyle.css";
import { NavLink } from "react-router-dom";

function Contextual() {

  const [songs, setSongs] = useState([])

  const [occasion, setOccasion] = useState('')
  const [mood, setMood] = useState('')
  const [weather, setWeather] = useState('')
  const [genders, setGenders] = useState([])

  const [contextualSongs, setContextualSongs] = useState([])


  useEffect(() => {
    const contextual = songs.filter(song => {
      return song.weather === weather && song.mood === mood && song.occasion === occasion && (song.gender === genders[0] || song.gender === genders[1] || song.gender === genders[2]);
    });
    setContextualSongs(contextual);
    console.log(contextual)

  }, [occasion, mood, weather]);

  useEffect(
    () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3001/api/songs", requestOptions)
        .then(response => response.json())
        .then(result => {
          setSongs(result)
        })
        .catch(error => console.log('error', error));
    }


    , [])


  return (
    <div>
      <div className="contextualContainer">
        <div className="contextualTitle">
          <NavLink to='/home'>
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
              onChange={(e) => setOccasion(e.target.value)}
              className="ctxSelect" name="ocasiones" id="ocasiones">
              <option value="" disabled selected>Actividad</option>
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
              onChange={(e) => setMood(e.target.value)}

              className="ctxSelect" name="field" id="field">
              <option value="" disabled selected>Estado de ánimo</option>
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
              onChange={(e) => setWeather(e.target.value)}

              className="ctxSelect" name="wheater" id="wheater">
              <option value="" disabled selected>Clima</option>
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
            <li
              onClick={() => setGenders([...genders, 'rock'])}
              className="lightStyle">Rock</li>
            <li
              onClick={() => setGenders([...genders, 'country'])}

              className="lightStyle">Country</li>
            <li
              onClick={() => setGenders([...genders, 'soul'])}

              className="lightStyle">Soul</li>
            <li
              onClick={() => setGenders([...genders, 'jazz'])}

              className="lightStyle">Jazz</li>
            <li
              onClick={() => setGenders([...genders, 'blues'])}
              className="lightStyle">Blues</li>
            <li
              onClick={() => setGenders([...genders, 'hip-hop'])}
              className="lightStyle">Hip-Hop</li>
            <li
              onClick={() => setGenders([...genders, 'pop'])}
              className="lightStyle">Pop</li>
            <li
              onClick={() => setGenders([...genders, 'reggae'])}
              className="lightStyle">Reggae</li>
            <li
              onClick={() => setGenders([...genders, 'folk'])}
              className="lightStyle">Folk</li>
            <li
              onClick={() => setGenders([...genders, 'r&b'])}
              className="lightStyle">R&B</li>
            <li
              onClick={() => setGenders([...genders, 'classical'])}
              className="lightStyle">Clásico</li>
            <li
              onClick={() => setGenders([...genders, 'ambient'])}
              className="lightStyle">Ambiente</li>
            <li
              onClick={() => setGenders([...genders, 'edm'])}
              className="lightStyle">EDM</li>
            <li
              onClick={() => setGenders([...genders, 'electronic'])}
              className="lightStyle">Electrónica</li>
            <li
              onClick={() => setGenders([...genders, 'disco'])}
              className="lightStyle">Disco</li>
            <li
              onClick={() => setGenders([...genders, 'new age'])}
              className="lightStyle">New Age</li>
            <li
              onClick={() => setGenders([...genders, 'punk'])}
              className="lightStyle">Punk</li>
            <li
              onClick={() => setGenders([...genders, 'heavy metal'])}
              className="lightStyle">Heavy metal</li>
          </ul>
        </div>
        <button className="disabled"> Crear Playlist</button>
      </div>
    </div>
  );
}

export default Contextual;
