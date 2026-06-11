import Navbar from "../components/Navbar";
import "./Dashboard.css";
import interstellar from "../assets/movies/interstellar.jpg";
import avatar from "../assets/movies/avatar.jpg";
import jawan from "../assets/movies/jawan.jpg";

import { Link } from "react-router-dom";

export default function Dashboard() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      img: interstellar,
    },
    {
      id: 2,
      title: "Avatar",
      img: avatar,
    },
    {
      id: 3,
      title: "Jawan",
      img: jawan,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="banner">
        <h1>Book Movie Tickets Online</h1>
      </div>

      {/* 3 Column Layout */}
      <div className="main-container">

        {/* Left Column */}
        <div className="left-panel">
          <h3>Categories</h3>
          <p>Action</p>
          <p>Comedy</p>
          <p>Drama</p>
          <p>Horror</p>
        </div>

        {/* Center */}
        <div className="center-panel">
          <h2>Recommended Movies</h2>

          <div className="movie-grid">
            {movies.map(movie => (
              <div key={movie.id} className="movie-card">
                <img
                  src={movie.img}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>

                <Link to={`/booking/${movie.id}`}>
                  <button>Book Ticket</button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-panel">
          <h3>Offers</h3>
          <p>50% Cashback</p>
          <p>Student Discount</p>
          <p>Weekend Special</p>
        </div>

      </div>
    </>
  );
}