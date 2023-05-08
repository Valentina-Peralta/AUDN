import React from 'react'
import ContextualStyle from "../Contextual/ContextualStyle.css"

function Contextual() {
    return (
      <div>
        <div className='contextualContainer'>
            <div className='contextualTitle'>
            <img src="src\Img\position=left-1.svg" alt="backArrow" />    
            <h3 className='contextualMusic'>Música Contextual</h3>
            </div>
          <div> 
            <form className='options' action="">
              <label className='contextualLabel' for="ocasiones">¿Cuál es la ocasión?</label>
              <select className='ctxSelect' name='ocasiones' id='ocasiones'>
                <option value="Ejercicio Físico">Ejercicio Físico</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Celebración">Celebración</option>
                <option value="Dormir">Dormir</option>
                <option value="Meditar">Meditar</option>
                <option value="Social">Social</option>
                <option value="Estudiar">Estudiar</option>
                <option value="Relajación">Relajación</option>
                <option value="Viajando">Viajando</option>
              </select>
              <label className='contextualLabel'  for="field">¿Cómo te sientes?</label>
              <select className='ctxSelect' name='field' id='field'>
                <option value="">On fire</option>
                <option value="">Be Quiet</option>
                <option value="">Lets go</option>
              </select>
              <label className='contextualLabel' for="wheater">¿Cómo está el clima?</label>
              <select className='ctxSelect' name="wheater" id="wheater" >
                <option value="">Sunny</option>
                <option value="">Rainy</option>
                <option value="">Too Cold</option>
              </select>
            </form>
          </div>
          <div className='styleContainer'>
            <ul className='stylesList'>
              <li className='style'>Rock</li>
              <li className='style'>Country</li>
              <li className='style'>Soul</li>
              <li className='style'>Jazz</li>
              <li className='style'>Blues</li>
              <li className='style'>Hip-Hop</li>
              <li className='style'>Pop</li>
              <li className='style'>Reggae</li>
              <li className='style'>Folk</li>
              <li className='style'>R&B</li>
              <li className='style'>Clásico</li>
              <li className='style'>Alternativo</li>
              <li className='style'>Ambiente</li>
              <li className='style'>EDM</li>
              <li className='style'>Electrónica</li>
              <li className='style'>Disco</li>
              <li className='style'>New Age</li>
              <li className='style'>Punk</li>

            </ul>
          </div>
          <button className='disabled'> Crear Playlist</button>
        </div>
      </div>
    )
}

export default Contextual