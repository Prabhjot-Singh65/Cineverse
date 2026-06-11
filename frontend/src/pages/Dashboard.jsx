import Navbar from "../components/Navbar";
import "./Dashboard.css";
import { useState } from "react";
import interstellar from "../assets/movies/interstellar.jpg";
import avatar from "../assets/movies/avatar.jpg";
import jawan from "../assets/movies/jawan.jpg";

import { Link } from "react-router-dom";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Movies");
  const items = [
    {
      id: 1,
      title: "Interstellar",
      category: "Movies",
      img: interstellar,
    },
    {
      id: 2,
      title: "Avatar",
      category: "Movies",
      img: avatar,
    },
    {
      id: 3,
      title: "Jawan",
      category: "Movies",
      img: jawan,
    },
    {
      id: 4,
      title: "Music Concert",
      category: "Events",
      img: jawan,
    },
    {
      id: 5,
      title: "IPL Final",
      category: "Sports",
      img: avatar,
    },
  ];

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <>
      <Navbar setSelectedCategory={setSelectedCategory} />

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
          <p>Sci-Ficition</p>
          <p>Comedy</p>
          <p>Drama</p>
          <p>Horror</p>
        </div>

        {/* Center */}
        <div className="center-panel">
          <h2>Recommended Movies</h2>

          <div className="movie-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="movie-card">

                <img
                  src={item.img}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <Link to={`/booking/${item.id}`}>
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