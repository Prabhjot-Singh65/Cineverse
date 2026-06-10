import { useParams, Link } from "react-router-dom";

export default function Booking() {
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Booking</h1>

      <p>Selected Movie ID: {movieId}</p>

      <h3>Select Show Time</h3>

      <button>10:00 AM</button>
      <button>2:00 PM</button>
      <button>6:00 PM</button>

      <br />
      <br />

      <Link to="/seats/1">
        <button>Proceed to Seat Selection</button>
      </Link>
    </div>
  );
}