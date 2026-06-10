import { Link } from "react-router-dom";

export default function Dashboard() {
  const movies = [
    {
      id: 1,
      title: "Avengers Endgame",
      image:
        "https://via.placeholder.com/200x300",
    },
    {
      id: 2,
      title: "Interstellar",
      image:
        "https://via.placeholder.com/200x300",
    },
  ];

  return (
    <div>
      <h1>CineVerse Dashboard</h1>

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>

            <Link to={`/booking/${movie.id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}