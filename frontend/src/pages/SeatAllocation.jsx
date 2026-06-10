import { useState } from "react";

export default function SeatAllocation() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 25 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h1>Seat Allocation</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,60px)",
          gap: "10px",
        }}
      >
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              backgroundColor: selectedSeats.includes(seat)
                ? "green"
                : "lightgray",
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <h3>
        Selected Seats:
        {selectedSeats.join(", ")}
      </h3>

      <button>Confirm Booking</button>
    </div>
  );
}