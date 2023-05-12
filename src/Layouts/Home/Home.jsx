import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.css";
import Headphone from "../../Img/headphones.png";
import Cherub from "../../Img/Cherub.png";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="top-gradient"></div>
      <div className="header-container">
        <div className="header-title">Música ya</div>
        <div className="icons-container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="state=active">
              <path
                id="Vector"
                d="M13.2222 11.5111L16.2778 14.5667C16.5019 14.7907 16.6139 15.0759 16.6139 15.4222C16.6139 15.7685 16.5019 16.0537 16.2778 16.2778C16.0537 16.5019 15.7685 16.6139 15.4222 16.6139C15.0759 16.6139 14.7907 16.5019 14.5667 16.2778L11.1444 12.8556C11.0222 12.7333 10.9306 12.5956 10.8694 12.4424C10.8083 12.2901 10.7778 12.1324 10.7778 11.9694V7.11111C10.7778 6.76481 10.8951 6.47433 11.1298 6.23967C11.3636 6.00581 11.6537 5.88889 12 5.88889C12.3463 5.88889 12.6368 6.00581 12.8714 6.23967C13.1053 6.47433 13.2222 6.76481 13.2222 7.11111V11.5111ZM12 23C9.53519 23 7.325 22.2716 5.36944 20.8147C3.41389 19.3586 2.1 17.4593 1.42778 15.1167C1.32593 14.75 1.36178 14.4037 1.53533 14.0778C1.70807 13.7519 1.97778 13.5481 2.34444 13.4667C2.69074 13.3852 3.00159 13.4614 3.277 13.6952C3.55159 13.9299 3.73981 14.2204 3.84167 14.5667C4.3713 16.3593 5.39511 17.8056 6.91311 18.9056C8.4303 20.0056 10.1259 20.5556 12 20.5556C14.3833 20.5556 16.4049 19.7253 18.0647 18.0647C19.7253 16.4049 20.5556 14.3833 20.5556 12C20.5556 9.61667 19.7253 7.5947 18.0647 5.93411C16.4049 4.27433 14.3833 3.44444 12 3.44444C10.5944 3.44444 9.28055 3.77037 8.05833 4.42222C6.83611 5.07407 5.80741 5.97037 4.97222 7.11111H7.11111C7.45741 7.11111 7.74789 7.22804 7.98256 7.46189C8.21641 7.69656 8.33333 7.98704 8.33333 8.33333C8.33333 8.67963 8.21641 8.9697 7.98256 9.20356C7.74789 9.43822 7.45741 9.55556 7.11111 9.55556H2.22222C1.87593 9.55556 1.58585 9.43822 1.352 9.20356C1.11733 8.9697 1 8.67963 1 8.33333V3.44444C1 3.09815 1.11733 2.80767 1.352 2.573C1.58585 2.33915 1.87593 2.22222 2.22222 2.22222C2.56852 2.22222 2.859 2.33915 3.09367 2.573C3.32752 2.80767 3.44444 3.09815 3.44444 3.44444V5.09444C4.48333 3.79074 5.75159 2.78241 7.24922 2.06944C8.74604 1.35648 10.3296 1 12 1C13.5278 1 14.959 1.29007 16.2937 1.87022C17.6275 2.45119 18.7886 3.23544 19.777 4.223C20.7646 5.21137 21.5488 6.37248 22.1298 7.70633C22.7099 9.041 23 10.4722 23 12C23 13.5278 22.7099 14.9586 22.1298 16.2924C21.5488 17.6271 20.7646 18.7882 19.777 19.7758C18.7886 20.7641 17.6275 21.5488 16.2937 22.1298C14.959 22.7099 13.5278 23 12 23Z"
                fill="#26262E"
              />
            </g>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="style=fill, state=active, notification=true">
              <g id="Vector">
                <path
                  d="M11.5833 2C7.79907 2 5.06667 4.35294 5.06667 7.4902V12.1961L2 17.6863H21.1667L18.1 12.1961V7.4902C18.1 4.35294 16.3121 2 11.5833 2Z"
                  fill=""
                />
                <path
                  d="M8.13333 18.4706C8.13333 23.1765 15.0333 23.1765 15.0333 18.4706M11.5833 2C7.79907 2 5.06667 4.35294 5.06667 7.4902V12.1961L2 17.6863H21.1667L18.1 12.1961V7.4902C18.1 4.35294 16.3121 2 11.5833 2Z"
                  stroke="#26262E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <circle id="notification" cx="18" cy="5" r="4" fill="#FF8E0A" />
            </g>
          </svg>
        </div>
      </div>
      <div className="main-actions-card-container">
        <NavLink to="/cupido">
          <div className="card">
            <div className="card-1-image">
              <img className="headphone" src={Headphone} alt="" />
              <img className="cherub" src={Cherub} alt="" />
            </div>
            <div className="card-text">
              <p className="card-title">Cupido Musical</p>
              <p className="card-caption">
                Tus artistas favoritos nunca van a dejarte con el corazón roto
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/contextual">
          <div className="card">
            <div className="card-2-image"></div>
            <div className="card-text">
              <p className="card-title">Música contextual</p>
              <p className="card-caption">
                Creamos la playlist perfecta para cualquier situación
              </p>
            </div>
          </div>
        </NavLink>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
