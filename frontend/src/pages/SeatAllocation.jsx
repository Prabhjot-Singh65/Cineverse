import { useState } from "react";
import Swal from "sweetalert2";

export default function SeatAllocation() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from(
    { length: 50 },
    (_, i) => i + 1
  );

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

 const confirmBooking = () => {
  if (selectedSeats.length === 0) {
    Swal.fire({
      title: "No Seat Selected",
      text: "Please select at least one seat.",
      icon: "warning",
    });
    return;
  }

  Swal.fire({
    title: "Booking Successful!",
    text: `Seats: ${selectedSeats.join(", ")}`,
    icon: "success",
    confirmButtonText: "OK",
  });
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Select Your Seats</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10,60px)",
          gap: "10px"
        }}
      >
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              height: "50px",
              background:
                selectedSeats.includes(seat)
                  ? "green"
                  : "#ddd"
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <h3>
        Selected Seats:
        {" "}
        {selectedSeats.join(", ")}
      </h3>

      <button
        onClick={confirmBooking}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          background: "crimson",
          color: "white",
          border: "none"
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}