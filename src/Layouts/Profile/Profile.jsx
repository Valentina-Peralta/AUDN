import "./Profile.css";
import NavBar from "../../Components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Profile() {
  const user_name = localStorage.getItem("user_user_name");
  const name = localStorage.getItem("user_name");
  const profileImage = localStorage.getItem("user_image");
  const id = localStorage.getItem("user_id");
  const [playlists, setPlaylists] = useState([]);
  console.log(playlists)


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3001/api/playlists/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result.error) {
          const filteredPlaylists = result.filter((playlist) => playlist.name !== "Música contextual" && playlist.name !== "Cupido Musical");

          setPlaylists(filteredPlaylists);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="profile">
      <div className="profile-img">
        <img src={profileImage} alt="" />
      </div>

      <NavLink to="/config">
        <svg
          className="profile-config"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#FDFEFF" />
          <path
            d="M24 13L20.7 16.3H16.3V20.7L13 24L16.3 27.3V31.7H20.7L24 35L27.3 31.7H31.7V27.3L35 24L31.7 20.7V16.3H27.3L24 13Z"
            stroke="#FF8E0A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M24 27.3C24.8752 27.3 25.7146 26.9523 26.3335 26.3335C26.9523 25.7146 27.3 24.8752 27.3 24C27.3 23.1248 26.9523 22.2854 26.3335 21.6666C25.7146 21.0477 24.8752 20.7 24 20.7C23.1248 20.7 22.2854 21.0477 21.6666 21.6666C21.0477 22.2854 20.7 23.1248 20.7 24C20.7 24.8752 21.0477 25.7146 21.6666 26.3335C22.2854 26.9523 23.1248 27.3 24 27.3Z"
            stroke="#FF8E0A"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
      <p className="profile-name">{name}</p>
      <p className="profile-alias">@{user_name}</p>
      <div className="profile-divider-container">
        <p className="mis-playlists">Mis playlists</p>
        <svg
          className="profile-divider"
          width="87"
          height="2"
          viewBox="0 0 87 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="87" y2="1" stroke="#E4E6E8" strokeWidth="2" />
        </svg>
        <NavLink to='/newPlaylist'>
          <button className="btn-standard-small">Crear Playlist</button>
        </NavLink>
      </div>
      <div className="profile-playlists-container">

        {playlists.map((playlist) => {
          return (
            <div className="profile-playlist"
              key={playlist.id}>
              <NavLink to={`/userPlaylist/${playlist.id}`}> <div className="profile-playlist-img">
                <img src={playlists[0].album_images[0]} alt="" />
              </div>
                <p className="profile-playlist-name">{playlist.name}</p>
                <p className="profile-playlist-owner">{user_name}</p>
              </NavLink>
            </div>

          );
        })}
      </div>


      <NavBar />

    </div>
  );
}

export default Profile;
